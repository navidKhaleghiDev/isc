import { cva } from 'class-variance-authority';

export const baseRadioButton = cva(
  `peer relative cursor-pointer appearance-none rounded-full transition-all duration-300
  bg-white dark:bg-neutral-500 checked:bg-teal-500 dark:checked:bg-teal-500
  border border-neutral-300 checked:border-teal-500
  before:content[''] before:w-2 before:h-2 before:block before:absolute before:bg-white before:rounded before:opacity-0 checked:before:opacity-100 dark:checked:border-teal-500`,
  {
    variants: {
      intent: {
        default: '',
        error: '',
      },
      size: {
        sm: `size-4 before:top-[0.188rem] before:right-[0.188rem]`,
        md: `size-5 before:top-[0.313rem] before:right-[0.313rem]`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);
