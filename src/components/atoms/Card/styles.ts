import { cva } from 'class-variance-authority';

export const cardStyles = cva('bg-white p-6 rounded', {
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
