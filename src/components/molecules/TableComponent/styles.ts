import { cva } from 'class-variance-authority';

export const cellStyles = cva(
  'first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg overflow-hidden'
);
