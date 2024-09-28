import { VariantProps } from 'class-variance-authority';

import { statusCircleStyle } from './styles';

export interface StatusCircleProps
  extends VariantProps<typeof statusCircleStyle> {
  content?: number | string;
  dir?: 'rtl' | 'ltr';
  className?: string;
  disabled?: boolean;
}
