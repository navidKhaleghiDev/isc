import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  `absolute flex justify-center items-center top-0 right-0 aspect-square bg-red-500 rounded-full text-xs text-white normal leading-4`,
  {
    variants: {
      size: {
        sm: 'size-2 -top-0.5 -right-0.5',
        md: 'size-5 -top-2 -right-2',
        default: '',
      },
    },
  }
);
