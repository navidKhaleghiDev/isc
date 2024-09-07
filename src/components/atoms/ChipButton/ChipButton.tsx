import React from 'react';
import { chipButtonStyles } from './styles';
import { IconButtonProps } from '../BaseButton/types';
import { IconButton } from '../BaseButton';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  icon?: IconButtonProps['icon'];
  onClickIcon?: () => void;

  color: 'default' | 'green' | 'yellow' | 'lightGray';
}

export function ChipButton({
  label,
  color,
  onClick,
  icon,
  className,
  disabled,
  onClickIcon,
}: ChipButtonType) {
  return (
    <button
      disabled={disabled}
      className={chipButtonStyles({ color, className })}
      type="button"
      onClick={onClick}
    >
      {label}
      {icon && <IconButton icon={icon} color="neutral" onClick={onClickIcon} />}
    </button>
  );
}
