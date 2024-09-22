import { SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

// Remember that this cva has been used in different modules and can not be in specific module
// The color of the icon is better to be text-gray-700 when we are using it in the darkMode.

export const iconBaseInputStyles = cva(
  'absolute inset-y-0 flex px-2 items-center dark:peer-disabled:text-gray-700 peer-disabled:cursor-default peer-disabled:text-gray-300 fill-current',
  {
    variants: {
      intent: {
        default:
          'text-gray-400 dark:text-gray-500 peer-hover:text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-gray-300 dark:peer-hover:text-gray-300',
        error: 'text-red-500 peer-focus:border-red-500',
      },
      right: {
        true: 'right-0',
        false: 'left-0',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

export const baseTextareaStyles = cva(
  'p-2 block rounded-lg border-2 outline-none border-gray-300 placeholder:text-right placeholder:text-rtl disabled:border-gray-300 disabled:text-gray-300 focus:border-gray-900 focus:placeholder:text-gray-900',
  {
    variants: {
      intent: {
        default: '',
        error: 'border-red-600',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-64`,
        lg: `w-[21.875rem]`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseCheckBoxStyles = cva(
  `before:content[''] peer relative cursor-pointer appearance-none border rounded transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-400 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500`,
  {
    variants: {
      intent: {
        default:
          'border-gray-200 bg-gray-100 dark:border-gray-400 dark:bg-gray-500',
        error: '',
      },
      size: {
        sm: `size-4`,
        md: `size-6`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseSelectStyles = cva(
  `px-2 py-1.5 appearance-none flex rounded-lg outline-none bg-white placeholder:text-right border-gray-300 placeholder:text-rtl relative`,
  {
    variants: {
      intent: {
        default: `text-gray-900 focus:border-teal-500 border shadow-sm focus:border-2 focus:placeholder-gray-900 focus:text-gray-900 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-500 disabled:shadow-none`,
        primary:
          'bg-white w-fit disabled:text-gray-300 rounded-md text-xs text-gray-600 cursor-pointer',
        error: `text-gray-900 border-2 placeholder-gray-900`,
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
        sm: `w-40 h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[13.75rem] h-10 ${SIZE.TYPOGRAPHY.BODY4}`,
        lg: `w-64 h-10  ${SIZE.TYPOGRAPHY.BODY4}`,
        xl: '',
        freeWidth: `w-full h-10 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseOtpStyles = cva(
  'block rounded-lg text-gray-400 outline-none text-center text-base',
  {
    variants: {
      intent: {
        default:
          'border text-gray-300 border-gray-500 focus:border-gray-500 focus:text-gray-500 focus:placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300 disabled:shadow-none',
        error: 'text-gray-900 border border-red-600 placeholder-red-400',
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
        xs: ``,
        sm: ``,
        md: `size-10 ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `size-14 ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: ``,
      },
    },
    defaultVariants: {
      intent: 'error',
      size: 'md',
    },
  }
);
