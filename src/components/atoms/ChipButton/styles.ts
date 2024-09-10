import { cva } from 'class-variance-authority';
import { BaseIconColors } from '../BaseIcon/styles';

export const chipButtonStyles = cva(
  'flex max-w-max items-center py-4 px-2 w-full max-h-5 rounded-md disabled:opacity-40 ',
  {
    variants: {
      color: {
        ...BaseIconColors,
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
