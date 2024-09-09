import { IconButton } from '../BaseButton';
import { badgeStyles } from './styles';
import { BadgeProps } from './types';

/**
 * Badge Component (Atomic Design - Atom)
 *
 * A component that renders an icon button with an optional badge, often used for displaying notifications or statuses.
 *
 * @component
 *
 * @param {Object} props - The props for the Badge component.
 * @param {string | number} [props.content] - The content to display inside the badge. Typically used for numeric values or small text.
 * @param {JSX.Element} props.icon - The icon to display inside the button.
 * @param {string} [props.className] - Additional custom className for the button container.
 * @param {string} [props.classNameIcon] - Additional custom className for the icon element.
 * @param {string} [props.color] - The color of the icon button.
 * @param {boolean} [props.loading] - If true, the button will show a loading state (e.g., a spinner instead of the icon).
 * @param {Function} [props.onClick] - The function to execute when the button is clicked.
 * @param {'sm' | 'md' | 'default'} [props.size] - The size of the button and the badge. 'sm' for small, 'md' for medium, and 'lg' for large.
 * @param {string} [props.type] - The button type (e.g., 'button', 'submit', etc.).
 *
 * @returns {JSX.Element} Returns the rendered Badge component.
 */

export function Badge({
  content,
  icon,
  className,
  classNameIcon,
  color,
  loading,
  onClick,
  size,
  type,
}: BadgeProps): JSX.Element {
  return (
    <div className="relative w-fit">
      {content && (
        <span className={`${badgeStyles({ size })}`}>
          {size === 'md' && content}
        </span>
      )}
      <IconButton
        icon={icon}
        className={className}
        classNameIcon={classNameIcon}
        color={color}
        loading={loading}
        onClick={onClick}
        size={size}
        type={type}
      />
    </div>
  );
}
