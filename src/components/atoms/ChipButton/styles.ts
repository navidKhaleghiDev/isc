import { cva } from 'class-variance-authority';

export const chipButtonStyles = cva(
  'flex max-w-max items-center py-4 px-2 w-full max-h-5 rounded-md disabled:opacity-40 ',
  {
    variants: {
      color: {
        default: 'bg-neutral-200 text-neutral-800 disabled:opacity-40',
        neutralLight: 'bg-neutral-100 text-neutral-800 disabled:opacity-40',
        neutral: 'bg-neutral-200 text-neutral-800 disabled:opacity-40',
        tealLight: 'bg-teal-100 text-teal-500 disabled:opacity-40',
        teal: 'bg-teal-200 text-teal-500 disabled:opacity-40',
        yellowLight: 'bg-yellow-100 text-yellow-600 disabled:opacity-40',
        yellow: 'bg-yellow-200 text-yellow-600 disabled:opacity-40',
        redLight: 'bg-red-100 text-red-600 disabled:opacity-40',
        red: 'bg-red-200 text-red-600 disabled:opacity-40',
        blueLight: 'bg-blue-100 text-blue-500 disabled:opacity-40',
        blue: 'bg-blue-200 text-blue-500 ',
        purpleLight: 'bg-purple-100 text-purple-500 disabled:opacity-40',
        purple: 'bg-purple-300 text-purple-500 disabled:opacity-40',
        neutralLightNoBg: 'text-neutral-800 disabled:opacity-40',
        neutralNoBg: 'text-neutral-800 disabled:opacity-40',
        tealNoBg: 'text-teal-500 disabled:opacity-40',
        redLightNoBg: 'text-red-600 disabled:opacity-40',
        redNoBg: 'text-red-600 disabled:opacity-40',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
