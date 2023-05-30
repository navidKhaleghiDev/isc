import { baseButtonStyles, iconButtonStyles } from './styles';
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
  size,
  type,
}: IBaseButton) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
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
          className={iconButtonStyles({ type, size, className: 'ml-4' })}
        />
      )}
      {label}
      {endIcon && (
        <BaseIcon
          icon={endIcon}
          className={iconButtonStyles({ type, className: 'mr-4' })}
        />
      )}
    </button>
  );
}
