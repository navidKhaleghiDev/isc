import { PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const menuItemStyles = cva(
  'flex fill-current items-center w-full h-10 px-3 my-2 rounded ',
  {
    variants: {
      active: {
        true: `${PALLET.LIGHT.BG_COLOR.GRAY} ${PALLET.LIGHT.TEXT_COLOR.PRIMARY}`,
        false: `hover:bg-neutral-100 hover:text-sky-600`,
      },
    },
    defaultVariants: {
      active: true,
    },
  }
);
