import { cva } from 'class-variance-authority';

export const baseOtpStyles = cva(
  'block rounded-lg outline-none text-center bg-white dark:bg-transparent dark:disabled:border-gray-500 dark:disabled:text-gray-500 dark:text-gray-500 dark:border-gray-400 disabled:text-gray-300 disabled:border-gray-300 text-base',
  {
    variants: {
      intent: {
        default:
          'border text-gray-400 dark:hover:border-gray-300 dark:focus:text-white dark:focus:border-white dark:hover:text-gray-300 border-gray-400 hover:text-gray-500 hover:border-gray-500 focus:border-gray-900 focus:text-gray-900 focus:placeholder-gray-500',
        error:
          'text-gray-900 border border-red-600 dark:border-red-500 dark:text-white',
      },
      size: {
        sm: 'size-10',
        md: 'size-14',
        responsive: 'size-10 sm:size-14',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);
