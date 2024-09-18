import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  `peer p-2 flex text-sm rounded-lg outline-none border h-10 disabled:border-neutral-300 dark:text-white disabled:placeholder-neutral-400 disabled:opacity-50 dark:border-neutral-400 dark:placeholder-neutral-500 dark:bg-neutral-700 dark:disabled:border-neutral-500 dark:disabled:placeholder-neutral-500`,
  {
    variants: {
      intent: {
        default: `text-neutral-400 dark:focus:border-white dark:focus:placeholder-white border-neutral-300 hover:border-neutral-500 dark:hover:placeholder-neutral-300 dark:hover:border-neutral-300 hover:placeholder-neutral-500 focus:border-neutral-900 focus:placeholder-neutral-900  disabled:bg-neutral-100 `,
        error: `border-red-600 placeholder-neutral-900 dark:focus:border-red-500 dark:border-red-500 `,
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-[15.94rem]`,
        lg: `w-[21.88rem]`,
        freeWidth: `w-full h-10 text-md`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseInputTextStyles = cva(
  `px-1 text-neutral-400 text-xs peer-hover:text-neutral-500 peer-focus:text-neutral-900 peer-disabled:text-neutral-300 dark:text-white disabled:opacity-50`,
  {
    variants: {
      intent: {
        default: ``,
        error: ``,
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-[15.94rem]`,
        lg: `w-[21.88rem]`,
        freeWidth: `h-10 text-md`,
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export const baseInputWarperStyles = cva(``, {
  variants: {
    fullWidth: {
      true: 'w-full',
    },
    size: {
      sm: `w-40`,
      md: `w-[15.94rem]`,
      lg: `w-[21.88rem]`,
      freeWidth: `w-full h-10 text-md`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
