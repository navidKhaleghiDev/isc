import { cva } from 'class-variance-authority';

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
        md: `size-10`,
        lg: `size-14`,
      },
    },
    defaultVariants: {
      intent: 'error',
      size: 'md',
    },
  }
);
