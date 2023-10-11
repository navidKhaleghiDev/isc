import { baseButtonStyles, iconInButtonStyles } from './styles';
import { IBaseButton } from './types';
import { BaseIcon } from '../BaseIcon';
import { LoadingSvg } from '../Svgs/LoadingSvg';

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
}: IBaseButton) {
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
            className: `${size !== 'sm' && 'ml-4'}`,
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
