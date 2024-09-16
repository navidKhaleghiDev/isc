import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseDropDownStyles = cva(
  'flex justify-between items-center px-2',
  {
    variants: {
      intent: {
        default: `bg-white rounded-lg border border-gray-300 text-gray-300 hover:border-gray-400 hover:text-gray-400 focus:border-gray-900 focus:text-gray-900 disabled:bg-white disabled:text-gray-300 disabled:border-gray-300 disabled:opacity-70 text-base
        dark:bg-gray-700 dark:text-gray-500 dark:border-gray-400 dark:hover:text-white  dark:hover:bg-gray-700 dark:active:bg-gray-700 dark:active:text-white
        `,
        error: 'text-red-600 border-2 border-red-600',
      },
      fullWidth: {
        true: 'w-full',
      },
      selected: {
        true: 'text-teal-600',
      },
      size: {
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-40 h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[220px] h-10 text-base ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `w-64 h-10 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] h-16 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const optionSelectStyles = cva(
  ` absolute block bg-white rounded-lg ${PALLET.BORDER_COLOR.NEUTRAL_LIGHT} text-gray-400  shadow-sm text-left mt-[7px] border max-h-20 overflow-y-auto z-10   dark:bg-gray-700 dark:text-gray-500 dark:border-gray-400 dark:hover:text-white  dark:hover:bg-gray-700 dark:active:text-white dark:active:bg-gray-700 dark:active:text-white `,
  {
    variants: {
      isShow: {
        false: 'hidden',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        xs: `w-52 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-40 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[220px] text-lg ${SIZE.TYPOGRAPHY.BODY3} `,
        lg: `w-64 h-10 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
      },
    },
    defaultVariants: {
      isShow: false,
      size: 'md',
    },
  }
);
