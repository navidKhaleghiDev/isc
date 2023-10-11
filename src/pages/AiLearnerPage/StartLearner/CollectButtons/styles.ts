import { cva } from 'class-variance-authority';

export const collectButtonsStyles = cva(
  `w-1/2 px-4 py-2 text-md text-gray-600  border-gray-500 hover:bg-teal-600 hover:text-white`,
  {
    variants: {
      active: {
        true: 'border-teal-600 bg-teal-600 text-white',
        undefined: 'bg-transparent',
      },
    },
  }
);
