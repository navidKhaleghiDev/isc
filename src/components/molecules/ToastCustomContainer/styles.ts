import { cva } from 'class-variance-authority';

export const toastStyle = cva('flex text-white justify-end', {
  variants: {
    typeToast: {
      success: 'bg-teal-500',
      error: 'bg-red-400',
      info: 'bg-gray-500',
      warning: 'bg-yellow-500',
      default: '',
    },
  },
});
