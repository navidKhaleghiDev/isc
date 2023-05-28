import { cva } from 'class-variance-authority';

export const baseInputStyles = cva('px-2 flex block bg-translate rounded-lg', {
  variants: {
    intent: {
      primary:
        'text-neutral-600 border border-2 border-neutral-600 outline-sky-600 focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
      secondary: '',
      danger: 'border-2 border-neutral-600 ',
    },
    fullWidth: {
      true: 'w-full',
    },
    size: {
      xs: 'py-0.5 text-sm ',
      sm: 'py-1 text-sm ',
      md: 'py-1.5 text-md',
      lg: 'py-3 text-lg ',
      xl: 'py-4 text-xl ',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
