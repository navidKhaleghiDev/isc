import { useRef, useState } from 'react';
import { DoubleRangeSliderProps } from '../types';
import { sliderStyles, thumbStyles } from '../styles';

/**
 * @component
 * @param {DoubleRangeSlider} props The props for DoubleRangeSlider component.
 * @param {number} props.min - The minimum value of the slider
 * @param {number} props.max - The maximum value of the slider
 * @param {number} props.initialMin - The initial minimum value
 * @param {number} props.initialMax - The initial maximum value
 * @param {number} props.step - The step size
 * @param {(values: { min: number, max: number }) => void} [props.onChange] - Callback function triggered when the range values change
 * @returns {JSX.Element} The rendered component
 */
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
  const sliderRef = useRef<HTMLDivElement>(null);

  const percent = (value: number) => ((value - min) / (max - min)) * 100;

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
    <div className="relative w-64 h-1 m-10" ref={sliderRef}>
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
  );
}
