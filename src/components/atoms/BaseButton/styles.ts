import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseButtonStyles = cva(
  `flex items-center justify-center transition duration-150 ease-in-out rounded-md focus:outline-none p-px ${SIZE.TYPOGRAPHY.BODY2}`,
  {
    variants: {
      type: {
        primary: `${PALLET.BUTTON_COLOR.TEAL}`,
        outline: `${PALLET.BUTTON_COLOR.NEUTRAL} border border-neutral-600`,
        shadow: `bg-white text-teal-600 shadow-lg`,
        secondary: `${PALLET.BUTTON_COLOR.YELLOW}`,
        red: `${PALLET.BUTTON_COLOR.RED} `,
      },
      size: {
        sm: SIZE.BUTTON.SMALL,
        md: SIZE.BUTTON.MEDIUM,
        lg: SIZE.BUTTON.LARGE,
        xl: SIZE.BUTTON.X_LARGE,
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      type: 'primary',
      size: 'md',
    },
  }
);

export const iconButtonStyles = cva('fill-current ', {
  variants: {
    type: {
      primary: 'text-white',
      outline: 'text-teal-600',
      shadow: 'text-red-600',
      secondary: 'text-gray-600',
      red: 'text-red-600',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'sm',
  },
});
