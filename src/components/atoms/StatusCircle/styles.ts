import { cva } from 'class-variance-authority';

export const statusCircleStyle = cva(
  `absolute top-0 z-20 flex justify-center items-center rounded-full text-xs leading-3 px-1`,
  {
    variants: {
      size: {
        sm: 'size-2',
        md: 'size-3',
        lg: 'size-5',
        responsive: 'size-2 md:size-3 lg:size-5',
      },
      color: {
        teal: 'bg-teal-500 dark:bg-teal-400',
        red: 'bg-red-500 text-white dark:bg-red-400 text-xs leading-3',
      },
    },
    defaultVariants: {
      size: 'lg',
      color: 'red',
    },
  }
);
