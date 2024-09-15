import { useRef, useState } from 'react';
import { sliderStyles, thumbStyles } from './styles';
import { SingleRangeSliderProps } from './types';

export function SingleRangeSlider({
  min,
  max,
  initialValue,
  step,
  onChange,
}: SingleRangeSliderProps) {
  const [value, setValue] = useState(initialValue);
  const sliderRef = useRef<HTMLDivElement>(null);

  const percent = (item: number) => ((item - min) / (max - min)) * 100;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const start = e.clientX;
    const startValue = value;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!sliderRef.current) return;

      const dx = moveEvent.clientX - start;
      const sliderWidth = sliderRef.current.offsetWidth;

      if (sliderWidth === 0) return;

      const percentMoved = (dx / sliderWidth) * (max - min);
      const newValue = Math.round(startValue + percentMoved / step) * step;

      if (newValue >= min && newValue <= max) {
        setValue(newValue);
        onChange?.(newValue);
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
        <span className="flex items-center mt-3 text-xs">{value}</span>
      </div>
    </div>
  );
}
