import { cva } from 'class-variance-authority';

export const chipButtonStyles = cva(
  'flex max-w-max justify-between items-center w-full px-3 max-h-5 rounded-full disabled:opacity-40 disabled:bg-neutral-200 disabled:text-neutral-500',
  {
    variants: {
      color: {
        default: 'bg-neutral-200 text-neutral-500',
        lightGray: 'bg-neutral-200 text-neutral-500 opacity-40',
        green: 'bg-teal-100 text-neutral-500',
        yellow: 'bg-yellow-100 text-neutral-500',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
