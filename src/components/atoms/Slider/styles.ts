import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  'absolute top-1/2 w-64 h-1 rounded-lg transform -translate-y-1/2',
  {
    variants: {
      background: {
        range: 'bg-neutral-200',
        fill: 'bg-teal-500',
      },
    },
  }
);

export const thumbStyles = cva(
  'absolute top-1/2 w-4 h-4 bg-white dark:bg-neutral-500 border border-neutral-200 dark:border-neutral-600 rounded-full transform -translate-y-1/2 -translate-x-1/2 cursor-pointer'
);
