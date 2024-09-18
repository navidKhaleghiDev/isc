import { cva } from 'class-variance-authority';

export const baseSwitchStyles = cva(
  'slider flex items-center rounded-full p-1 duration-200 h-6',
  {
    variants: {
      size: {
        sm: 'w-10',
        md: 'w-12',
        responsive: 'w-10 sm:w-12',
      },
    },
  }
);
