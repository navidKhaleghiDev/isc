import { cva } from 'class-variance-authority';

export const baseButtonStyles = cva(
  'flex items-center justify-center transition duration-150 ease-in-out mx-1',
  {
    variants: {
      intent: {
        primary:
          'text-white transition duration-150 ease-in-out rounded hover:bg-indigo-600 focus:outline-none border bg-sky-600 dark:hover:bg-indigo-500 dark:bg-indigo-400',
        outline: 'border border-sky-600 text-sky-600',
        secondary:
          'bg-gray-300 hover:bg-gray-400 text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-700',
        danger: 'bg-red-500 text-white focus:ring-red-500 hover:border-red-900',
      },
      model: {
        form: 'rounded-md w-64',
        modal: '',
        default: 'rounded-xl ',
      },
      size: {
        xs: 'text-sm',
        sm: 'text-sm',
        md: 'text-md h-10 px-4 py-2',
        lg: 'text-lg',
        xl: 'text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
      model: 'default',
    },
  }
);

export const iconButtonStyles = cva('fill-current ', {
  variants: {
    intent: {
      primary: 'text-white',
      outline: 'text-sky-600',
      secondary: 'text-gray-600',
      danger: 'text-red-600',
    },
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
});
