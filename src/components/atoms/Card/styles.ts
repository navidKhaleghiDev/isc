import { cva } from 'class-variance-authority';

export const cardStyles = cva('bg-white rounded', {
  variants: {
    intent: {
      primary: '',
      default: '',
    },
  },
  defaultVariants: {
    intent: 'default',
  },
});
