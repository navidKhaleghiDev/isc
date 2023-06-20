import { baseButtonStyles, iconInButtonStyles } from './styles';
import { IBaseButton } from './types';
import { BaseIcon } from '../BaseIcon';

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
}: IBaseButton) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={baseButtonStyles({
        type,
        fullWidth,
        size,
        className,
      })}
    >
      {startIcon && (
        <BaseIcon
          icon={startIcon}
          className={iconInButtonStyles({
            type,
            size,
            className: `${size !== 'sm' && 'ml-4'}`,
          })}
        />
      )}
      {label}
      {endIcon && (
        <BaseIcon
          icon={endIcon}
          className={iconInButtonStyles({
            type,
            className: `${size !== 'sm' && 'mr-4'}`,
          })}
        />
      )}
    </button>
  );
}
