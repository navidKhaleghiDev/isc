import { cva } from 'class-variance-authority';

export const notificationStyles = cva('my-2', {
  variants: {
    size: {
      sm: '',
      md: '',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
