import { statusCircleStyle } from './styles';
import { StatusCircleProps } from './types';

/**
 * StatusCircle is a UI component that renders a circle with optional content inside.
 *
 * @component
 * @param {string | number} [props.content] - The content to display inside the circle (e.g., a number or a short text).
 * @param {'sm' | 'md' | 'lg'| 'responsive' | 'default'} [props.size] - The size of the circle. 'sm' for small, 'md' for medium, 'lg' for large, 'responsive' for responsive and 'default' for default size.
 * @param {string} [props.className] - Additional custom class names for the container.
 * @param {string} [props.color] - The background color of the circle.
 * @param {'ltr' | 'rtl'} [props.dir='rtl'] - The direction of the component. 'ltr' for left-to-right, 'rtl' for right-to-left (default is 'rtl').
 *
 * @returns {JSX.Element} Returns the rendered StatusCircle component.
 */

export function StatusCircle(props: StatusCircleProps): JSX.Element {
  const { content, size, color, dir = 'rtl', className } = props;
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
