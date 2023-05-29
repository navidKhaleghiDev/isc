import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
  variants: {
    color: {
      primary: 'text-sky-600',
      error: 'text-red-600',
      default: '', // it should be empty
    },
    hoverColor: {
      primary: 'hover:text-green-600',
      error: 'hover:text-red-800',
      default: '', // it should be empty
    },
    size: {
      xs: 'text-sm',
      sm: 'text-md',
      md: 'text-lg',
      lg: 'text-2xl',
      xl: 'text-4xl',
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      light: 'font-light',
      hoverColor: 'default',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    weight: 'light',
  },
});
