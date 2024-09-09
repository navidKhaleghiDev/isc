import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconButton, IconButtonProps } from '../BaseButton';
import { chipButtonStyles } from './styles';
import { Typography } from '../Typography';
import { typographyStyles } from '../Typography/styles';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;
type TypographySize = VariantProps<typeof typographyStyles>;
interface ChipButtonType extends BaseButtonAttributes {
  label: string;
  icon?: IconButtonProps['icon'];
  onClickIcon?: () => void;
  size?: TypographySize['size'];
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
  size,
}: ChipButtonType) {
  return (
    <button
      disabled={disabled}
      className={chipButtonStyles({ color, className })}
      type="button"
      onClick={onClick}
    >
      <Typography size={size}>{label}</Typography>
      {icon && <IconButton icon={icon} color="neutral" onClick={onClickIcon} />}
    </button>
  );
}
