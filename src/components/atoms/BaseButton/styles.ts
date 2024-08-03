import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

const disabledClass = cva({
  variants: {
    type: {
      default: 'disabled:opacity-40 disabled:bg-teal-500 disabled:text-white',
      redBg: 'disabled:opacity-40 disabled:bg-red-500 disabled:text-red-900',
    },
  },
});

export const baseButtonStyles = cva(
  `flex items-center justify-center transition duration-150 ease-in-out rounded-lg focus:outline-none p-px ${SIZE.TYPOGRAPHY.BODY4} ${disabledClass}`,
  {
    variants: {
      type: {
        default: `${PALLET.BUTTON_COLOR.TEAL}`,
        inactive: `${PALLET.BUTTON_COLOR.TEAL} opacity-40`,
        shadow: `${PALLET.BUTTON_COLOR.SHADOW}`,
        secondary: `${PALLET.BUTTON_COLOR.YELLOW}`,
        red: `${PALLET.BUTTON_COLOR.RED}`,
        redBg: `${PALLET.BUTTON_COLOR.RED_BG}`,
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
  'fill-current p-2 flex items-center justify-center rounded-lg',
  {
    variants: {
      color: {
        teal: 'bg-teal-600 text-neutral-100',
        tealDark: 'bg-teal-500',
        tealNoBg: 'text-teal-600',
        redNoBg: 'text-red-600',
        neutral: 'text-neutral-600',
        yellow: 'bg-yellow-600 text-neutral-100',
        red: 'bg-red-100 text-red-600',
        white: 'bg-white text-neutral-900',
        default: 'bg-neutral-200 text-neutral-600 ',
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
