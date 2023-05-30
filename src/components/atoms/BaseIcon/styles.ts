import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseIconStyles = cva('fill-current', {
  variants: {
    color: {
      neutral: `${PALLET.TEXT_COLOR.NEUTRAL}`,
      teal: `${PALLET.TEXT_COLOR.TEAL}`,
      yellow: `${PALLET.TEXT_COLOR.YELLOW}`,
      red: `${PALLET.TEXT_COLOR.RED}`,
    },
    hoverColor: {
      primary: 'hover:text-teal-600',
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
});
