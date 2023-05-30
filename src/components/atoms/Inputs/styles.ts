import { SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  'px-2.5 py-2.5 flex block bg-translate rounded-lg outline-none text-right text-rtl',
  {
    variants: {
      intent: {
        default:
          'text-neutral-500 border border-2 border-neutral-500 focus:border-teal-600 focus:text-teal-500 focus:placeholder-teal-500 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400 disabled:shadow-none',
        error:
          'text-red-600 border border-2 border-red-600 placeholder-red-400',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-[18.75rem] h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[27.5rem] h-10 text-lg ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `w-[60rem] h-10 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] h-16 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);

export const iconBaseInputStyles = cva(
  'absolute inset-y-0 left-0 flex px-2 items-center pointer-events-none fill-current ',
  {
    variants: {
      intent: {
        default: 'text-neutral-500',
        error: 'text-red-500',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);
