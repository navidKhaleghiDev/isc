import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  `absolute flex justify-center items-center bg-red-500 rounded-full text-xs leading-3 text-white normal px-1`,
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
