import { cva } from 'class-variance-authority';

export const baseTextareaStyles = cva(
  'p-2 block rounded-lg border-2 outline-none border-gray-300 placeholder:text-right placeholder:text-rtl disabled:border-gray-300 disabled:text-gray-300 focus:border-gray-900 focus:placeholder:text-gray-900',
  {
    variants: {
      intent: {
        default: '',
        error: 'border-red-600',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-64`,
        lg: `w-[21.875rem]`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);
