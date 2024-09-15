import { cva } from 'class-variance-authority';

export const toggleStyles = cva('flex', {
  variants: {
    size: {
      small: 'h-7 text-xs',
      medium: 'h-10 text-sm',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
