import { cva } from 'class-variance-authority';

export const badgeStyles = cva(
  `absolute flex justify-center items-center top-0 right-0 aspect-square bg-red-500 rounded-full text-xs text-white normal leading-4`,
  {
    variants: {
      content: {
        number: 'min-w-3 w-auto min-h-3 h-auto',
        undefined: 'w-2 h-2',
      },
    },
  }
);
