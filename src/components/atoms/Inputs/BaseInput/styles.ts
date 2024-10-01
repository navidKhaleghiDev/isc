import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  `peer p-2 flex text-sm rounded-lg outline-none border h-10 disabled:bg-white disabled:border-gray-300 dark:text-white disabled:placeholder-gray-300 rtl:placeholder:text-right disabled:opacity-50 dark:border-gray-400 dark:placeholder-gray-500 dark:bg-transparent dark:disabled:border-gray-500 dark:disabled:placeholder-gray-500`,
  {
    variants: {
      intent: {
        default: `text-gray-900 dark:focus:border-white dark:border-gray-400 dark:focus:placeholder-white border-gray-300 hover:border-gray-500 dark:hover:placeholder-gray-300 dark:hover:border-gray-300 hover:placeholder-gray-500 focus:border-gray-900 focus:placeholder-gray-900`,
        error: `border-red-600 dark:text-white dark:placeholder-white placeholder-gray-900 dark:focus:border-red-500 dark:border-red-500 `,
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-[15.94rem]`,
        lg: `w-[21.88rem]`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);
export const baseInputTextStyles = cva(
  `px-1 text-gray-400 peer-has-[:hover]:text-gray-500 text-xs peer-has-[:focus]:text-gray-900 peer-has-[:disabled]:text-gray-300 peer-has-[:disabled:hover]:text-gray-300 dark:text-white dark:peer-has-[:hover]:text-white dark:peer-has-[:disabled]:text-gray-500`,
  {
    variants: {
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-[15.94rem]`,
        lg: `w-[21.88rem]`,
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
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
