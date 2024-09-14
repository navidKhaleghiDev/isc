import { cva } from 'class-variance-authority';

export const baseButtonStyles = cva(
  `flex items-center justify-center transition duration-150 ease-in-out rounded-lg focus:outline-none p-2`,
  {
    variants: {
      type: {
        default: `
        font-semibold
        bg-teal-500 text-white 
        hover:bg-teal-600 active:bg-teal-700
        disabled:bg-teal-500 disabled:text-white disabled:opacity-40 
        dark:bg-teal-400 dark:text-neutral-700
        dark:hover:bg-teal-500 dark:active:bg-teal-600
        dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
        inactive: `
        font-semibold
        bg-teal-500 text-white opacity-40
        hover:bg-teal-600 active:bg-teal-700
        disabled:bg-teal-500 disabled:text-white disabled:opacity-40 
        dark:bg-teal-400 dark:text-neutral-700
        dark:hover:bg-teal-500 dark:active:bg-teal-600
        dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
        red: ` 
        font-semibold
        bg-red-100 text-red-600 
        hover:bg-red-200 active:bg-red-300
        disabled:bg-red-100 disabled:text-red-600 disabled:opacity-40 
        dark:bg-red-300 dark:text-white
        dark:hover:bg-red-400 dark:active:bg-red-500  
        dark:disabled:bg-red-300 dark:disabled:text-white dark:disabled:opacity-40`,
        neutral: ` 
        font-semibold
        bg-white text-neutral-500 border-[0.063rem] border-neutral-100
        hover:bg-neutral-100 hover:text-neutral-600 hover:border-0
        active:bg-neutral-200 active:text-neutral-600 active:border-0
        disabled:bg-neutral-200 disabled:text-neutral-900 disabled:opacity-40 disabled:border-0
        dark:bg-neutral-600 dark:text-neutral-300 dark:border-neutral-500
        dark:hover:bg-neutral-600 dark:hover:text-neutral-100 
        dark:active:bg-neutral-800 dark:active:text-neutral-100
        dark:disabled:bg-neutral-600 dark:disabled:text-neutral-100 dark:disabled:opacity-40`,
        tertiary: ` 
        font-semibold
        bg-[#ffffff1a] text-neutral-500 
        hover:text-teal-500                            
        disabled:text-neutral-300
        dark:text-neutral-200
        dark:hover:text-teal-400
        dark:disabled:text-neutral-500`,
      },
      size: {
        sm: 'h-10 w-[5.94rem]',
        md: 'h-10 w-40',
        lg: 'h-10 w-[11.88rem]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
  }
);
export const loadingStyle = cva(
  'flex items-center justify-center rounded-lg p-2 cursor-default',
  {
    variants: {
      type: {
        default: 'bg-teal-700 dark:bg-teal-600',
        red: 'bg-red-300 dark:bg-red-500',
        neutral: 'bg-neutral-200 dark:bg-neutral-800',
        inactive: '',
        tertiary: '',
      },
      size: {
        sm: 'h-10 w-[5.94rem]',
        md: 'h-10 w-40',
        lg: 'h-10 w-[11.88rem]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
  }
);

//   variants: {
//     type: {
//       default: `
//         bg-teal-500 text-white
//         hover:bg-teal-600 active:bg-teal-700
//         disabled:bg-teal-500 disabled:text-white disabled:opacity-40
//         dark:bg-teal-400 dark:text-neutral-700
//         dark:hover:bg-teal-500 dark:active:bg-teal-600
//         dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
//       inactive: `
//         bg-teal-500 text-white opacity-40
//         hover:bg-teal-600 active:bg-teal-700
//         disabled:bg-teal-500 disabled:text-white disabled:opacity-40
//         dark:bg-teal-400 dark:text-neutral-700
//         dark:hover:bg-teal-500 dark:active:bg-teal-600
//         dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
//       red: `
//         bg-red-100 text-red-600
//         hover:bg-red-200 active:bg-red-300
//         disabled:bg-red-100 disabled:text-red-600 disabled:opacity-40
//         dark:bg-red-300 dark:text-white
//         dark:hover:bg-red-400 dark:active:bg-red-500
//         dark:disabled:bg-red-300 dark:disabled:text-white dark:disabled:opacity-40`,
//       tealLink: ``,
//       noBg: ``,
//       neutral: `
//         bg-white text-neutral-500 border-[0.063rem] border-neutral-100
//         hover:bg-neutral-100 hover:text-neutral-600 hover:border-0
//         active:bg-neutral-200 active:text-neutral-600 active:border-0
//         disabled:bg-neutral-200 disabled:text-neutral-900 disabled:opacity-40 disabled:border-0
//         dark:bg-neutral-600 dark:text-neutral-300 dark:border-neutral-500
//         dark:hover:bg-neutral-600 dark:hover:text-neutral-100
//         dark:active:bg-neutral-800 dark:active:text-neutral-100
//         dark:disabled:bg-neutral-600 dark:disabled:text-neutral-100 dark:disabled:opacity-40`,
//     },
//   },
//   defaultVariants: {
//     type: 'default',
//   },
// });

export const iconButtonStyles = cva(
  'flex items-center justify-center rounded-lg',
  {
    variants: {
      color: {
        teal: ` 
        bg-teal-500 text-white 
        hover:bg-teal-600 active:bg-teal-700
        disabled:bg-teal-500 disabled:text-white disabled:opacity-40 
        dark:bg-teal-400 dark:text-neutral-700
        dark:hover:bg-teal-500 dark:active:bg-teal-600
        dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
        redNoBg: `
        text-red-500 hover:text-red-600 active:text-red-700 disabled:opacity-40 
        dark:text-red-300 dark:hover:text-red-400 dark:active:text-red-500 dark:disabled:text-red-100`,
        neutral: `
        bg-white text-neutral-500 border-[0.063rem] border-neutral-100
        hover:bg-neutral-100 hover:text-neutral-600 hover:border-0
        active:bg-neutral-200 active:text-neutral-600 active:border-0
        disabled:bg-neutral-200 disabled:text-neutral-900 disabled:opacity-40 disabled:border-0
        dark:bg-neutral-600 dark:text-neutral-300 dark:border-neutral-500
        dark:hover:bg-neutral-600 dark:hover:text-neutral-100 
        dark:active:bg-neutral-800 dark:active:text-neutral-100
        dark:disabled:bg-neutral-600 dark:disabled:text-neutral-100 dark:disabled:opacity-40`,
        neutralNoBg: `
        text-neutral-500 hover:text-neutral-600 active:text-neutral-900 disabled:opacity-40 
        dark:text-neutral-300 dark:hover:text-neutral-200 dark:active:text-neutral-100 dark:disabled:text-[#4B5563]`,
        default: 'text-neutral-600',
      },
      size: {
        sm: 'h-7 w-7',
        md: 'h-10 w-10',
        default: 'h-fit w-fit',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'default',
    },
  }
);
