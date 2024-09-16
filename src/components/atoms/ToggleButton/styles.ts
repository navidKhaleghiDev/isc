import { cva } from 'class-variance-authority';

export const toggleStyles = cva('flex', {
  variants: {
    size: {
      small: 'h-7 text-xs rounded-[0.25rem]',
      medium: 'h-10 text-sm rounded-lg',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
