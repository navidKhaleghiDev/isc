import { cva } from 'class-variance-authority';

export const avatarStyles = cva(
  'relative flex justify-center items-center overflow-hidden rounded-full dark:bg-gray-600',
  {
    variants: {
      intent: {
        primary: 'bg-teal-600 border-none',
        grey: 'bg-gray-100 border-none',
        inactive: 'bg-gray-200 border-none',
      },
      size: {
        sm: 'w-12 h-12',
        md: 'w-16 h-16 ',
        lg: 'w-48 h-48 border-4',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

export const iconAvatarStyles = cva('absolute dark:text-white ', {
  variants: {
    intent: {
      primary: 'text-white ',
      grey: 'text-gray-400 ',
      inactive: 'text-gray-400 ',
    },
    size: {
      sm: 'w-5 h-5 ',
      md: 'w-6 h-6 ',
      lg: 'w-36 h-36',
    },
  },
  defaultVariants: {
    intent: 'grey',
    size: 'md',
  },
});
