import { ButtonHTMLAttributes, ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';

import { baseButtonStyles } from './styles';

export interface IBaseButton
  extends VariantProps<typeof baseButtonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  submit?: boolean;
  className?: string;
  startIcon?: string;
  endIcon?: string;
}
