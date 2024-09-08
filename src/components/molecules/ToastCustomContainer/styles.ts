import { cva } from 'class-variance-authority';

export const toastStyle = cva(
  'flex justify-end text-neutral-700 border dark:bg-neutral-700',
  {
    variants: {
      typeToast: {
        success:
          'bg-teal-100 border-teal-400 dark:text-teal-400 dark:border-teal-400',
        error:
          'bg-red-100 border-red-400 dark:text-red-300 dark:border-red-300',
        info: 'bg-neutral-100 border-neutral-400 dark:text-neutral-300 dark:border-neutral-300',
        warning:
          'bg-yellow-100 border-yellow-400 dark:text-yellow-300 dark:border-yellow-300',
        default: '',
      },
    },
  }
);
