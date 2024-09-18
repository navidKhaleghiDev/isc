import { statusCircleStyle } from './styles';
import { StatusCircleProps } from './types';

export function StatusCircle({
  content,
  size,
  color,
  dir = 'rtl',
  className,
}: StatusCircleProps) {
  return (
    <div
      className={`${dir === 'ltr' ? 'left-0' : 'right-0'}
      ${statusCircleStyle({ size, color })}
      ${className && ''}
      `}
    >
      <span className="hidden lg:block">{content}</span>
    </div>
  );
}
