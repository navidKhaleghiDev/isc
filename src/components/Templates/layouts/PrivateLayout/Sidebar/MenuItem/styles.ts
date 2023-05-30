import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const menuItemStyles = cva(
  `flex fill-current items-center w-full h-10 px-3 hover:${PALLET.BG_COLOR.NEUTRAL}`,
  {
    variants: {
      active: {
        true: `${PALLET.BG_COLOR.NEUTRAL} ${PALLET.TEXT_COLOR.TEAL} hover:bg-neutral-200`,
      },
      isChildren: {
        true: `${PALLET.BG_COLOR.NEUTRAL} ${PALLET.TEXT_COLOR.TEAL} hover:bg-neutral-200 `,
        undefined: 'my-2 rounded ',
      },
    },
    defaultVariants: {
      active: false,
      // isChildren: undefined,
    },
  }
);
// border-r-4 border-teal-600

export const menuChildItemStyles = cva(
  `${PALLET.TEXT_COLOR.TEAL} ${PALLET.BG_COLOR.NEUTRAL}`,
  {
    variants: {
      active: {
        true: `border-r-4 border-teal-600 hover:bg-neutral-200`,
      },
    },
    defaultVariants: {
      active: false,
      // isChildren: undefined,
    },
  }
);
