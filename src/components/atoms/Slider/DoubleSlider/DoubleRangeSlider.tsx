import { useRef, useState } from 'react';

import { DoubleRangeSliderProps } from '../types';
import { getValueStyles, sliderStyles, thumbStyles } from '../styles';

/**
 * @component
 * @param {DoubleRangeSliderProps} props The props for SingleRangeSlider component.
 * @param {number} props.min - The minimum value of the slider
 * @param {number} props.max - The maximum value of the slider
 * @param {number} props.initialMin - The initialMin value
 * @param {number} props.initialMax - The initialMax value
 * @param {number} props.step - The step size
 * @param {(values: { min: number, max: number }) => void} [props.onChange] - Callback function triggered when the range values change
 * @returns {JSX.Element} The rendered component
 */

export function DoubleRangeSlider(props: DoubleRangeSliderProps): JSX.Element {
  const { min, max, initialMin, initialMax, onChange } = props;
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
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
      const newValue = Math.round(startValue + percentMoved);

      if (thumb === 'min' && newValue <= maxValue && newValue >= min) {
        setMinValue(newValue);
        if (onChange) onChange({ min: newValue, max: maxValue });
      } else if (thumb === 'max' && newValue >= minValue && newValue <= max) {
        setMaxValue(newValue);
        if (onChange)
          onChange({
            min: newValue,
            max: maxValue,
          });
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
          <span className={getValueStyles()}>{minValue}</span>
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
          <span className={getValueStyles()}>{maxValue}</span>
        </div>
      </div>
    </div>
  );
}
