import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  'absolute top-1/2 w-64 h-1 rounded-lg transform -translate-y-1/2',
  {
    variants: {
      background: {
        range: 'bg-gray-200 dark:bg-gray-500',
        // rangeDark: 'bg-gray-500',
        fill: 'bg-teal-400',
      },
    },
  }
);

export const thumbStyles = cva(
  'absolute top-1/2 w-4 h-4 bg-white dark:bg-gray-600 border border-neutral-200 dark:border-gray-500 rounded-full transform -translate-y-1/2 -translate-x-1/2 cursor-pointer'
);

export const getValueStyles = cva(
  'flex justify-center items-center mt-3 text-xs'
);
