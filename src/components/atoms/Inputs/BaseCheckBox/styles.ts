import { cva } from 'class-variance-authority';

export const baseCheckBoxStyles = cva(
  `before:content[''] border-gray-200 bg-gray-100 checked:border-teal-500 dark:border-gray-400 dark:bg-gray-500 peer relative cursor-pointer appearance-none border rounded transition-all before:absolute disabled:opacity-50 before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4  before:bg-teal-400 before:opacity-0 before:transition-opacity dark:checked:bg-teal-500 checked:bg-teal-500 checked:before:bg-teal-500 dark:checked:border-teal-500`,
  {
    variants: {
      size: {
        sm: `size-4`,
        md: `size-6`,
        responsive: `size-5 md:size-6`,
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);
