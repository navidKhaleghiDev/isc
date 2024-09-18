import { cva } from 'class-variance-authority';

export const inputRadioButtonStyles = cva(
  `peer relative cursor-pointer appearance-none rounded-full transition-colors duration-300
                  bg-white dark:bg-neutral-500 checked:bg-teal-500 dark:checked:bg-teal-500
                  border border-neutral-300 checked:border-teal-500
                  before:content[''] before:w-2 before:h-2 before:block before:bg-white before:rounded before:opacity-0 checked:before:opacity-100 dark:checked:border-teal-500`,
  {
    variants: {
      size: {
        sm: 'size-4 before:translate-y-[0.188rem] before:translate-x-[0.188rem]',
        md: 'size-5 before:translate-y-[0.313rem] before:translate-x-[0.313rem]',
        responsive:
          'sm:size-5 sm:before:translate-y-[0.313rem] sm:before:translate-x-[0.313rem] size-4 before:translate-y-[0.188rem] before:translate-x-[0.188rem]',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  }
);

export const labelRadioButtonStyles = cva(
  `relative flex items-center rounded-full cursor-pointer text-neutral-400 peer-checked:text-neutral-900 dark:text-neutral-300 dark:peer-checked:text-white`
);
