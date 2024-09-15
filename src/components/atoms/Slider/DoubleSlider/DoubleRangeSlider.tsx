import { MouseEvent, useRef, useState } from 'react';
import { DoubleRangeSliderProps } from '../types';
import { filledRangeStyles, rangeStyles, thumbStyles } from '../styles';

export function DoubleRangeSlider({
  min,
  max,
  initialMin,
  initialMax,
  step,
  onChange,
}: DoubleRangeSliderProps) {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const sliderRef = useRef(null);

  const percent = (value: number) => ((value - min) / (max - min)) * 100;

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement, MouseEvent>,
    thumb: string
  ) => {
    const start = e.clientX;
    const startValue = thumb === 'min' ? minValue : maxValue;

    const onMouseMove = (moveEvent: { clientX: number }) => {
      if (!sliderRef.current) return;

      const dx = moveEvent.clientX - start;
      const sliderWidth = sliderRef.current.offsetWidth;

      if (sliderWidth === 0) return;

      const percentMoved = (dx / sliderWidth) * (max - min);
      const newValue = Math.round(startValue + percentMoved / step) * step;

      if (thumb === 'min' && newValue <= maxValue && newValue >= min) {
        setMinValue(newValue);
        onChange?.({ min: newValue, max: maxValue });
      } else if (thumb === 'max' && newValue >= minValue && newValue <= max) {
        setMaxValue(newValue);
        onChange?.({ min: minValue, max: newValue });
      }
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className="relative w-64 h-1 m-10" ref={sliderRef}>
      <div className={rangeStyles()} />

      <div
        className={filledRangeStyles()}
        style={{
          left: `${percent(minValue)}%`,
          width: `${percent(maxValue) - percent(minValue)}%`,
        }}
      />
      <div
        className={thumbStyles()}
        style={{ left: `${percent(minValue)}%` }}
        onMouseDown={(e) => handleMouseDown(e, 'min')}
        tabIndex={0}
        role="button"
      >
        {}
      </div>
      <div
        className={thumbStyles()}
        style={{ left: `${percent(maxValue)}% ` }}
        onMouseDown={(e) => handleMouseDown(e, 'max')}
        tabIndex={0}
        role="button"
      >
        {}
      </div>
    </div>
  );
}
