import { cva } from 'class-variance-authority';

export const baseTextareaStyles = cva(
  'p-2 block text-sm rounded-lg border outline-none disabled:bg-white dark:text-white disabled:placeholder-gray-300 disabled:opacity-50 dark:border-gray-400 dark:placeholder-gray-500 dark:bg-transparent dark:disabled:border-gray-500 dark:disabled:placeholder-gray-500 border-gray-300 placeholder:text-right placeholder:text-rtl disabled:border-gray-300 disabled:text-gray-300 ',
  {
    variants: {
      intent: {
        default:
          'text-gray-900 dark:focus:border-white dark:border-gray-400 dark:focus:placeholder-white border-gray-300 hover:border-gray-500 dark:hover:placeholder-gray-300 dark:hover:border-gray-300 hover:placeholder-gray-500 focus:border-gray-900 focus:placeholder-gray-900',
        error:
          'border-red-600 dark:text-white dark:placeholder-white placeholder-gray-900 dark:focus:border-red-500 dark:border-red-500 ',
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
