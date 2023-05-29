import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
  variants: {
    color: {
      primary: `${PALLET.LIGHT.TEXT_COLOR.PRIMARY} ${PALLET.DARK.TEXT_COLOR.PRIMARY}`,
      success: `${PALLET.LIGHT.TEXT_COLOR.SUCCESS} ${PALLET.DARK.TEXT_COLOR.SUCCESS}`,
      info: `${PALLET.LIGHT.TEXT_COLOR.INFO} ${PALLET.DARK.TEXT_COLOR.INFO}`,
      error: `${PALLET.LIGHT.TEXT_COLOR.ERROR} ${PALLET.DARK.TEXT_COLOR.ERROR}`,
      gray: `${PALLET.LIGHT.TEXT_COLOR.GRAY} ${PALLET.DARK.TEXT_COLOR.GRAY}`,
      warning: `${PALLET.LIGHT.TEXT_COLOR.WARNING} ${PALLET.DARK.TEXT_COLOR.WARNING}`,
      default: '', // it should be empty
    },
    hoverColor: {
      primary: 'hover:text-green-600',
      error: 'hover:text-red-800',
      default: '', // it should be empty
    },
    size: {
      xs: 'text-sm',
      sm: 'text-md',
      md: 'text-lg',
      lg: 'text-2xl',
      xl: 'text-4xl',
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      light: 'font-light',
      hoverColor: 'default',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    weight: 'light',
  },
});
