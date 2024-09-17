import { useEffect, useRef, useState } from 'react';
import { getValueStyles, sliderStyles, thumbStyles } from '../styles';
import { SingleRangeSliderProps } from '../types';

/**
 * @component
 * @param {SingleRangeSlider} props The props for SingleRangeSlider component.
 * @param {number} props.min - The minimum value of the slider
 * @param {number} props.max - The maximum value of the slider
 * @param {number} props.initialValue - The initial value
 * @param {number} props.step - The step size
 * @param {(values: { min: number, max: number }) => void} [props.onChange] - Callback function triggered when the range values change
 * @returns {JSX.Element} The rendered component
 */
export function SingleRangeSlider(props: SingleRangeSliderProps): JSX.Element {
  const { min, max, initialValue, onChange } = props;
  const [value, setValue] = useState(initialValue);
  const [rangeDistance, setRangeDistance] = useState(value - min);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percent = (item: number) => ((item - min) / (max - min)) * 100;

  useEffect(() => {
    setRangeDistance(value - min);
  }, [value, min]);
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const start = e.clientX;
    const startValue = value;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!sliderRef.current) return;

      const dx = moveEvent.clientX - start;
      const sliderWidth = sliderRef.current.offsetWidth;

      if (sliderWidth === 0) return;

      const percentMoved = (dx / sliderWidth) * (max - min);
      const newValue = startValue + percentMoved;

      if (newValue >= min && newValue <= max) {
        setValue(newValue);
        if (onChange) onChange({ max: newValue, distance: rangeDistance });
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
    <div className="w-64 h-6 mx-auto mt-10">
      <div className="relative w-64 h-1" ref={sliderRef}>
        <div className={sliderStyles({ background: 'range' })} />

        <div
          className={sliderStyles({ background: 'fill' })}
          style={{
            width: `${percent(value)}%`,
          }}
        />
        <div
          className={thumbStyles()}
          style={{ left: `${percent(value)}%` }}
          onMouseDown={handleMouseDown}
          tabIndex={0}
          role="button"
        >
          <span className={getValueStyles()}>{Math.round(value)}</span>
        </div>
      </div>
    </div>
  );
}
