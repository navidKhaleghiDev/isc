import { Icon } from '@iconify/react';

import { baseButtonStyles, iconButtonStyles } from './styles';
import { IBaseButton } from './types';
import { Typography } from '../Typography';

export function BaseButton({
  onClick,
  label,
  submit,
  fullWidth,
  className,
  startIcon,
  endIcon,
  intent = 'primary',
  size,
  model,
}: IBaseButton) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={baseButtonStyles({
        intent,
        model,
        fullWidth,
        size,
        className,
      })}
    >
      {startIcon && (
        <Icon
          icon={startIcon}
          className="fill-current text-white ml-2"
          width="18"
          height="18"
        />
      )}
      {label}
      {endIcon && (
        <Icon
          icon={endIcon}
          className={iconButtonStyles({
            intent,
            size,
            className: 'mr-2',
          })}
          width="18"
          height="18"
        />
      )}
    </button>
  );
}
