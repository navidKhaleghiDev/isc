import { cva } from 'class-variance-authority';

export const typographyStyles = cva('font-bold', {
  variants: {
    color: {
      primary: 'text-sky-600',
      default: 'text-gray-800',
    },
    size: {
      xs: 'text-sm',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-lg',
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
