import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  'w-64 h-1 rounded-lg cursor-pointer appearance-none accent-neutral-600 dark:accent-white dark:border-neutral-200',
  {
    variants: {
      color: {
        light: 'bg-neutral-600',
        dark: 'dark:bg-neutral-200',
      },
    },
    defaultVariants: {
      color: 'light',
    },
  }
);
