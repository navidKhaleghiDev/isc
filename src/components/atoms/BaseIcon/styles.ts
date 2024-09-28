import { cva } from 'class-variance-authority';

export const baseIconStyles = cva('fill-current', {
  variants: {
    color: {
      default: 'bg-gray-200 text-gray-800 disabled:opacity-40',
      neutralLight: 'bg-gray-100 text-gray-800 disabled:opacity-40',
      neutral: 'bg-gray-200 text-gray-800 disabled:opacity-40',
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
      neutralLightNoBg: 'text-gray-800 disabled:opacity-40',
      neutralNoBg: 'text-gray-800 disabled:opacity-40',
      tealNoBg: 'text-teal-500 disabled:opacity-40',
      redLightNoBg: 'text-red-600 disabled:opacity-40',
      redNoBg: 'text-red-600 disabled:opacity-40',
    },
    hoverColor: {
      primary: 'hover:text-teal-600',
      default: '',
    },
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-[2.375rem]',
      responsive: 'size-4 sm:size-6 md:size-[2.375rem]',
    },
  },
});
