import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const cardStyles = cva('', {
  variants: {
    type: {
      primary: `${PALLET.LIGHT.BG_COLOR.PRIMARY} ${PALLET.DARK.BG_COLOR.PRIMARY}`,
      success: `${PALLET.LIGHT.BG_COLOR.SUCCESS} ${PALLET.DARK.BG_COLOR.SUCCESS}`,
      info: `${PALLET.LIGHT.BG_COLOR.INFO} ${PALLET.DARK.BG_COLOR.INFO}`,
      error: `${PALLET.LIGHT.BG_COLOR.ERROR} ${PALLET.DARK.BG_COLOR.ERROR}`,
      gray: `${PALLET.LIGHT.BG_COLOR.GRAY} ${PALLET.DARK.BG_COLOR.GRAY}`,
      warning: `${PALLET.LIGHT.BG_COLOR.WARNING} ${PALLET.DARK.BG_COLOR.WARNING}`,
      default: `${PALLET.LIGHT.BG_COLOR.DEFAULT} ${PALLET.DARK.BG_COLOR.DEFAULT}`,
    },
    borderColor: {
      primary: `${PALLET.LIGHT.BORDER_COLOR.PRIMARY} ${PALLET.DARK.BORDER_COLOR.PRIMARY}`,
      success: `${PALLET.LIGHT.BORDER_COLOR.SUCCESS} ${PALLET.DARK.BORDER_COLOR.SUCCESS}`,
      info: `${PALLET.LIGHT.BORDER_COLOR.INFO} ${PALLET.DARK.BORDER_COLOR.INFO}`,
      error: `${PALLET.LIGHT.BORDER_COLOR.ERROR} ${PALLET.DARK.BORDER_COLOR.ERROR}`,
      gray: `${PALLET.LIGHT.BORDER_COLOR.GRAY} ${PALLET.DARK.BORDER_COLOR.GRAY}`,
      warning: `${PALLET.LIGHT.BORDER_COLOR.WARNING} ${PALLET.DARK.BORDER_COLOR.WARNING}`,
      default: `${PALLET.LIGHT.BORDER_COLOR.DEFAULT} ${PALLET.DARK.BORDER_COLOR.DEFAULT}`,
    },
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    border: {
      true: 'border',
    },
  },
  defaultVariants: {
    type: 'default',
    rounded: 'md',
  },
});
