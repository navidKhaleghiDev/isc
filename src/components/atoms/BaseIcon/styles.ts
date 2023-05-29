import { cva } from 'class-variance-authority';

export const baseIconStyles = cva('fill-current', {
  variants: {
    color: {
      primary: 'text-sky-600',
      error: 'text-red-600',
      success: 'text-green-600',
      info: 'text-blue-600',
      warning: 'text-orange-600',
      default: '', // it should be empty
    },
    hoverColor: {
      primary: 'hover:text-sky-600',
      default: '', // it should be empty
    },
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-18 w-18',
      xl: 'h-24 w-24',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    hoverColor: 'default',
  },
});
