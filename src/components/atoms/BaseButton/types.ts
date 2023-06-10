import { VariantProps } from 'class-variance-authority';

import { baseButtonStyles, iconButtonStyles } from './styles';

export interface IBaseButton extends VariantProps<typeof baseButtonStyles> {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  submit?: boolean;
  className?: string;
  startIcon?: string;
  endIcon?: string;
}

export interface IIconButton extends VariantProps<typeof iconButtonStyles> {
  onClick?: () => void;
  icon: string;
  className?: string;
  classNameIcon?: string;
}
