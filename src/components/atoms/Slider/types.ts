import { ComponentProps, PropsWithChildren } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from '@src/types/global';

import { BaseIcon } from '../BaseIcon';
import { typographyStyles } from '../Typography/styles';

export interface ITypography
  extends VariantProps<typeof typographyStyles>,
    PropsWithChildren {
  type?:
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body6'
    | 'span'
    | 'div';
  className?: string;
}

type BaseIconProps = ComponentProps<typeof BaseIcon>;
export interface ITypographyIcon extends Omit<ITypography, 'children'> {
  text: string;
  iconColor?: BaseIconProps['color'];
  iconSize?: BaseIconProps['size'];
  startIcon?: string | IconType;
  endIcon?: string;
}
