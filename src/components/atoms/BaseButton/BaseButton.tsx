import { baseButtonStyles, iconInButtonStyles } from './styles';
import { IBaseButton } from './types';
import { BaseIcon } from '../BaseIcon';
import { LoadingSvg } from '../Svgs/LoadingSvg';

/**
 * This BaseButton component renders a customizable button.
 * It supports different sizes, types, icons, and loading states.
 *
 * @component
 *
 * @param {Object} props - The properties for the BaseButton component.
 * @param {() => void} [props.onClick] - Click handler function.
 * @param {string} [props.label] - The text label of the button.
 * @param {boolean} [props.submit] - If true, the button is of type submit.
 * @param {boolean} [props.fullWidth] - If true, the button takes full width of its container.
 * @param {string} [props.className] - Additional class names for the button.
 * @param {string} [props.startIcon] - Icon to display at the start of the button.
 * @param {string} [props.endIcon] - Icon to display at the end of the button.
 * @param {boolean} [props.disabled] - If true, the button is disabled.
 * @param {string} [props.size] - The size of the button ('sm', 'md', 'lg').
 * @param {string} [props.type] - The type of the button ('primary', 'secondary', etc.).
 * @param {boolean} [props.loading] - If true, shows a loading spinner instead of the label.
 *
 * @returns {JSX.Element} The BaseButton component.
 */

export function BaseButton({
  onClick,
  label,
  submit,
  fullWidth,
  className,
  startIcon,
  endIcon,
  disabled,
  size,
  type,
  loading,
}: IBaseButton): JSX.Element {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={loading ? true : disabled}
      className={baseButtonStyles({
        type,
        fullWidth,
        size,
        className,
      })}
    >
      {startIcon && !loading && (
        <BaseIcon
          icon={startIcon}
          className={iconInButtonStyles({
            type: 'noBg',
            size,
            className: `${size !== 'sm' && 'ml-2'}`,
          })}
        />
      )}
      {loading ? <LoadingSvg /> : label}
      {endIcon && !loading && (
        <BaseIcon
          icon={endIcon}
          className={iconInButtonStyles({
            type: 'noBg',
            className: `${size !== 'sm' && 'mr-4'}`,
          })}
        />
      )}
    </button>
  );
}
