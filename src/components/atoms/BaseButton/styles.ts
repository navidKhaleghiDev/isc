import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

const disabledClass =
  'disabled:opacity-100 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400 disabled:border-2 disabled:shadow-none';

export const baseButtonStyles = cva(
  `flex items-center justify-center transition duration-150 ease-in-out rounded-md focus:outline-none p-px ${SIZE.TYPOGRAPHY.BODY2} ${disabledClass}`,
  {
    variants: {
      type: {
        default: `${PALLET.BUTTON_COLOR.TEAL}`,
        inactive: `${PALLET.BUTTON_COLOR.NEUTRAL} border border-neutral-600`,
        shadow: `${PALLET.BUTTON_COLOR.SHADOW}`,
        secondary: `${PALLET.BUTTON_COLOR.YELLOW}`,
        red: `${PALLET.BUTTON_COLOR.RED}`,
        tealLink: `text-teal-600 hover:bg-neutral-200 rounded-none`,
        neutral: `${PALLET.BUTTON_COLOR.NEUTRAL}`,
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
      type: 'default',
      size: 'md',
    },
  }
);

export const iconInButtonStyles = cva('fill-current ', {
  variants: {
    type: {
      default: `${PALLET.BUTTON_COLOR.TEAL} hover:bg-red-100`,
      inactive: `${PALLET.BUTTON_COLOR.NEUTRAL} border border-neutral-600`,
      shadow: `bg-white text-teal-600 shadow-lg`,
      secondary: `${PALLET.BUTTON_COLOR.YELLOW}`,
      red: `${PALLET.BUTTON_COLOR.RED} `,
      tealLink: ``,
      noBg: ``,
      neutral: `${PALLET.BUTTON_COLOR.NEUTRAL}`,
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
  },
  defaultVariants: {
    type: 'default',
    size: 'sm',
  },
});

export const iconButtonStyles = cva(
  'fill-current rounded p-1 flex items-center justify-center',
  {
    variants: {
      color: {
        teal: 'bg-teal-600 text-neutral-100',
        neutral: 'bg-neutral-200 text-teal-600',
        yellow: 'bg-yellow-600 text-neutral-100',
        red: 'bg-red-100 text-red-600',
        white: 'bg-white text-teal-600',
        default: '',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
        xxl: 'h-10 w-10',
        xxxl: 'h-16 w-16',
        default: 'h-fit w-fit',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'default',
    },
  }
);
