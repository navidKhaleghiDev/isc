import { VariantProps } from 'class-variance-authority';

import { baseButtonStyles } from './styles';

export interface IBaseButton extends VariantProps<typeof baseButtonStyles> {
  onClick?: () => void;
  label: string;
  submit?: boolean;
  className?: string;
  startIcon?: string;
  endIcon?: string;
}
