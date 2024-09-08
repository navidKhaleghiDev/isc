import { BaseIcon } from '@ui/atoms/BaseIcon';
import { LoadingSvg } from '@ui/atoms/Svgs';
import { iconButtonStyles } from '../styles';
import { IconButtonProps } from '../types';

/**
 * This IconButton component renders a button with an icon.
 * It supports different sizes, colors, and loading states.
 *
 * @component
 *
 * @param {Object} props - The properties for the IconButton component.
 * @param {() => void} [props.onClick] - Click handler function.
 * @param {string} [props.className] - Additional class names for the button.
 * @param {string} [props.classNameIcon] - Additional class names for the icon.
 * @param {string} props.icon - The icon to display inside the button.
 * @param {string} [props.size] - The size of the button and icon.
 * @param {string} [props.color] - The color of the button.
 * @param {string} [props.type] - The type of the button ('submit' or 'button').
 * @param {boolean} [props.loading] - If true, shows a loading spinner instead of the icon.
 *
 * @returns {JSX.Element} The IconButton component.
 */

export function IconButton({
  onClick,
  className,
  classNameIcon,
  icon,
  size,
  color,
  type,
  loading,
}: IconButtonProps): JSX.Element {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={iconButtonStyles({
        color,
        size,
        className,
      })}
      disabled={loading}
    >
      {loading ? (
        <LoadingSvg />
      ) : (
        <BaseIcon icon={icon} size={size} className={classNameIcon} />
      )}
    </button>
  );
}
