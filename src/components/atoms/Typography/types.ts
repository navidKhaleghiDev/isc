import { VariantProps } from 'class-variance-authority';

import { typographyStyles } from './styles';

export interface ITypography extends VariantProps<typeof typographyStyles> {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption';
  className?: string;
  children: string;
}
