import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseIconStyles = cva('fill-current', {
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
      primary: 'hover:text-sky-600',
      default: '', // it should be empty
    },
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-18 w-18',
      xl: 'h-24 w-24',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    hoverColor: 'default',
  },
});
