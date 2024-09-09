import { cva } from 'class-variance-authority';

export const baseSwitchStyles = cva(
  'slider flex items-center rounded-full p-1 duration-200',
  {
    variants: {
      size: {
        small: 'h-6 w-10',
        medium: 'h-6 w-12',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);
