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

export const toastIconStyle = cva('', {
  variants: {
    type: {
      success: 'dark:text-teal-400',
      error: 'dark:text-red-300',
      info: 'dark:text-neutral-300',
      warning: 'dark:text-yellow-300',
      default: '',
    },
    size: {
      sm: 'w-[17.188rem] h-14',
      md: 'w-[21.875rem] h-20',
      lg: 'w-[33.75rem] h-20',
      responsive:
        'w-[17.188rem] h-14 sm:w-[21.875rem] sm:h-20 md:w-[33.75rem] md:h-20',
    },
    dir: {
      rtl: 'left-auto right-4',
      ltr: 'right-auto left-4',
    },
  },
});
