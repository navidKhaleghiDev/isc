import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  'relative w-64 h-1 rounded-lg cursor-pointer appearance-none accent-neutral-600 dark:accent-white dark:border-neutral-200',
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

export const rangeStyles = cva(
  'absolute top-1/2 left-0 w-64 h-1 bg-neutral-200 rounded-lg transform -translate-y-1/2'
);

export const filledRangeStyles = cva(
  'absolute top-1/2 h-1 bg-teal-500 rounded-lg transform -translate-y-1/2'
);

export const thumbStyles = cva(
  'absolute top-1/2 w-4 h-4 bg-white dark:bg-neutral-500 border border-neutral-200 dark:border-neutral-600 rounded-full transform -translate-y-1/2 -translate-x-1/2 cursor-pointer'
);
