import { SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  'px-2.5 py-2.5 flex block rounded-lg outline-none placeholder:text-right placeholder:text-rtl',
  {
    variants: {
      intent: {
        default:
          'bg-neutral-100 text-neutral-500 border border-2 border-neutral-500 focus:border-teal-600 focus:text-teal-500 focus:placeholder-teal-500 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400 disabled:shadow-none',
        error:
          'text-red-600 border border-2 border-red-600 placeholder-red-400',
      },
      fullWidth: {
        true: 'w-full',
      },
      ltrPlaceHolder: {
        true: 'placeholder:text-left',
        false: 'placeholder:text-right placeholder:text-rtl',
      },
      size: {
        none: ``,
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-[18.75rem] h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[27.5rem] h-10 text-lg ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `w-[60rem] h-10 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] h-16 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        freeWidth: `w-full h-10 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);

export const iconBaseInputStyles = cva(
  'absolute inset-y-0 flex px-2 items-center fill-current ',
  {
    variants: {
      intent: {
        default: 'text-neutral-500',
        error: 'text-red-500',
      },
      right: {
        true: 'right-0',
        false: 'left-0',
      },
    },
    defaultVariants: {
      intent: 'default',
      right: false,
    },
  }
);

export const baseTextareaStyles = cva(
  'px-2.5 py-2.5 flex block rounded-lg outline-none placeholder:text-right placeholder:text-rtl',
  {
    variants: {
      intent: {
        default: '',
        error: '',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        xs: ``,
        sm: ``,
        md: ``,
        lg: ``,
        xl: ``,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);

export const baseCheckBoxStyles = cva(
  'w-5 h-5 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-teal-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
  {
    variants: {
      intent: {
        default: '',
        error: '',
      },
      size: {
        xs: ``,
        sm: ``,
        md: ``,
        lg: ``,
        xl: ``,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);
