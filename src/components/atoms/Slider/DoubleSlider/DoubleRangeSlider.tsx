import { useEffect, useRef, useState } from 'react';
import { DoubleRangeSliderProps } from '../types';
import { sliderStyles, thumbStyles } from '../styles';

export function DoubleRangeSlider({
  min,
  max,
  initialMin,
  initialMax,
  step,
  onChange,
}: DoubleRangeSliderProps): JSX.Element {
  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);
  const [rangeDistance, setRangeDistance] = useState<number>(
    maxValue - minValue
  );
  const sliderRef = useRef<HTMLDivElement>(null);

  const percent = (value: number) => ((value - min) / (max - min)) * 100;

  useEffect(() => {
    setRangeDistance(maxValue - minValue);
  }, [minValue, maxValue]);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
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
    <div className="w-64 h-6 mx-auto mt-1">
      <div className="relative w-64 h-1" ref={sliderRef}>
        <div className={sliderStyles({ background: 'range' })} />

        <div
          className={sliderStyles({ background: 'fill' })}
          style={{
            left: `${percent(minValue)}%`,
            width: `${percent(maxValue) - percent(minValue)}%`,
          }}
        />
        <div
          className={thumbStyles()}
          style={{ left: `${percent(minValue)}%` }}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
            handleMouseDown(e, 'min')
          }
          tabIndex={0}
          role="button"
        >
          <span className="flex items-center mt-3 text-xs">{minValue}</span>
        </div>
        <div
          className={thumbStyles()}
          style={{ left: `${percent(maxValue)}% ` }}
          onMouseDown={(e: React.MouseEvent<HTMLDivElement>) =>
            handleMouseDown(e, 'max')
          }
          tabIndex={0}
          role="button"
        >
          <span className="flex items-center mt-3 text-xs">{maxValue}</span>
        </div>
      </div>
      <span className="flex justify-center items-center mt-3 text-xs">
        {rangeDistance}
      </span>
    </div>
  );
}
