import { cva } from 'class-variance-authority';

export const borderSize = cva('', {
  variants: {
    size: {
      Small: 'rounded-[5px]',
      Medium: 'rounded-[10px]',
      Large: 'rounded-[20px]',
    },
  },
});
