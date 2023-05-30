import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
  variants: {
    color: {
      primary: `${PALLET.LIGHT.TEXT_COLOR.PRIMARY} `,
      success: `${PALLET.LIGHT.TEXT_COLOR.SUCCESS} `,
      info: `${PALLET.LIGHT.TEXT_COLOR.INFO} `,
      error: `${PALLET.LIGHT.TEXT_COLOR.ERROR} `,
      gray: `${PALLET.LIGHT.TEXT_COLOR.GRAY} `,
      warning: `${PALLET.LIGHT.TEXT_COLOR.WARNING} `,
      default: '', // it should be empty
    },
    hoverColor: {
      primary: 'hover:text-green-600',
      error: 'hover:text-red-800',
      default: '', // it should be empty
    },
    size: {
      h1: 'text-7xl',
      h2: 'text-6xl',
      h3: 'text-5xl',
      h4: 'text-4xl',
      h5: 'text-2xl',
      h6: 'text-xl',
      body1: 'text-3xl',
      body2: 'text-2xl',
      body3: 'text-xl',
      body4: 'text-base',
      caption: 'text-xs',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'body2',
    weight: 'medium',
  },
});
