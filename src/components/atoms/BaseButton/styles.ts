import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseButtonStyles = cva(
  `flex items-center justify-center transition duration-150 ease-in-out rounded-lg focus:outline-none p-2 ${SIZE.TYPOGRAPHY.BODY4}`,
  {
    variants: {
      type: {
        default: `${PALLET.BUTTON_COLOR.TEAL}`,
        inactive: `${PALLET.BUTTON_COLOR.TEAL} opacity-40`,
        shadow: `${PALLET.BUTTON_COLOR.SHADOW}`,
        secondary: `${PALLET.BUTTON_COLOR.YELLOW}`,
        red: `${PALLET.BUTTON_COLOR.RED}`,
        neutral: `${PALLET.BUTTON_COLOR.NEUTRAL}`,
        tealLink: `text-teal-600 hover:bg-neutral-200 rounded-none`,
        tertiary: `${PALLET.BUTTON_COLOR.TERTIARY}`,
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
      md: 'h-6 w-6',
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
  'flex items-center justify-center rounded-lg',
  {
    variants: {
      color: {
        teal: `${PALLET.BUTTON_COLOR.TEAL}`,
        tealDark: 'bg-teal-500',
        tealNoBg: 'text-teal-600',
        redNoBg: `text-red-500 hover:text-red-600 active:text-red-700 disabled:opacity-40 
                  dark:text-red-300 dark:hover:text-red-400 dark:active:text-red-500 dark:disabled:text-red-100`,
        neutral: `${PALLET.BUTTON_COLOR.NEUTRAL}`,
        neutralNoBg: `text-neutral-500 hover:text-neutral-600 active:text-neutral-900 disabled:opacity-40 
                      dark:text-neutral-300 dark:hover:text-neutral-200 dark:active:text-neutral-100 dark:disabled:text-[#4B5563]`,
        neutralLight: 'bg-neutral-100 text-neutral-600',
        yellow: 'bg-yellow-600 text-neutral-100',
        red: 'bg-red-100 text-red-600',
        white: 'bg-white text-neutral-900',
        default: 'text-neutral-600',
      },
      size: {
        sm: 'h-7 w-7',
        md: 'h-10 w-10',
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
