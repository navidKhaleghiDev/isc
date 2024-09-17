import { cva } from 'class-variance-authority';

export const baseOtpStyles = cva(
  'block rounded-lg outline-none text-center bg-white dark:bg-transparent dark:disabled:border-neutral-500 dark:disabled:text-neutral-500 dark:text-neutral-500 dark:border-neutral-400 disabled:text-neutral-300 disabled:border-neutral-300 text-base',
  {
    variants: {
      intent: {
        default:
          'border text-neutral-400 dark:hover:border-neutral-300 dark:focus:text-white dark:focus:border-white  dark:hover:text-neutral-300 border-neutral-400 hover:text-neutral-500 hover:border-neutral-500 focus:border-gray-500 focus:text-gray-500 focus:placeholder-gray-500',
        error:
          'text-gray-900 border border-red-600 dark:border-red-500 dark:text-white',
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
      intent: 'default',
      size: 'md',
    },
  }
);
