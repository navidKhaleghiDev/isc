import { cva } from 'class-variance-authority';

export const headerStyles = cva(
  'flex items-center justify-end h-12 box-content pt-2 px-4 pb-3',
  {
    variants: {
      type: {
        error: 'bg-red-600',
        success: 'bg-teal-600 ',
        none: '',
      },
    },
  }
);

export const contentStyles = cva('modal-content text-center min-h-[12rem]', {
  variants: {
    type: {
      error: '',
      success: '',
      none: '',
    },
  },
});

export const containerStyles = cva('', {
  variants: {
    size: {
      sm: 'sm:w-[20rem] w-full',
      md: 'sm:w-[28rem] w-full',
    },
  },
});
