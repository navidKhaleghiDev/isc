import { cva } from 'class-variance-authority';

export const typographyStyles = cva('', {
  variants: {
    color: {
      primary: 'text-sky-600',
      error: 'text-red-600',
      default: 'text-gray-800',
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
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    weight: 'light',
  },
});
