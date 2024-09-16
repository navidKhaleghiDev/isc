export const PALLET = {
  BG_COLOR: {
    WHITE: 'bg-white',
    GRAY: 'bg-neutral-50 dark:bg-neutral-700',
    TEAL_LIGHT: 'bg-teal-100',
    TEAL: 'bg-teal-200 dark:bg-teal-300', // #f0fdfa
    TEAL_DARK: 'bg-teal-500  ', // #f0fdfa
    RED_LIGHT: 'bg-red-200 dark:bg-red-300', // #fee2e2
    RED: 'bg-red-400',
    YELLOW: 'bg-yellow-100 dark:bg-yellow-300', // #f2e9dc
    NEUTRAL_LIGHT: 'bg-neutral-100 dark:bg-neutral-300', // #f5f5f5
    NEUTRAL: 'bg-neutral-200',
    NEUTRAL_DARK: 'bg-neutral-500',
  },
  TEXT_COLOR: {
    TEAL: 'text-teal-500 dark:text-teal-500',
    RED_LIGHT: 'text-red-500',
    RED: 'text-red-600 dark:text-red-600',
    YELLOW: 'text-yellow-600 dark:text-yellow-600',
    NEUTRAL_LIGHT: 'text-neutral-500 dark:text-neutral-400',
    NEUTRAL: 'text-neutral-600',
    NEUTRAL_MIDDLE: 'text-neutral-700',
    NEUTRAL_DARK: 'text-neutral-800 dark:text-neutral-400',
    WHITE: 'text-white dark:text-black',
    BLACK: 'text-black dark:text-white',
  },
  BORDER_COLOR: {
    TEAL: 'border-teal-500 dark:border-teal-500',
    RED: 'border-red-600 dark:border-red-500',
    YELLOW: 'border-yellow-600 dark:border-yellow-600',
    NEUTRAL_LIGHT: 'border-neutral-200',
    NEUTRAL_MIDDLE: 'border-neutral-300  dark:border-neutral-600',
    NEUTRAL: `border-neutral-300 hover:border-neutral-400 active:border-neutral-900 disabled:border-neutral-300 
             dark:border-neutral-400 dark:hover:border-white dark:disabled:border-neutral-500`,
  },
  BUTTON_COLOR: {
    TEAL: `
     bg-teal-500 text-white 
     hover:bg-teal-600 active:bg-teal-700
     disabled:bg-teal-500 disabled:text-white disabled:opacity-40 
     dark:bg-teal-400 dark:text-neutral-700
     dark:hover:bg-teal-500 dark:active:bg-teal-600
     dark:disabled:bg-teal-400 dark:disabled:text-teal-700 dark:disabled:opacity-40`,
    NEUTRAL: ` 
     bg-white text-neutral-500 border-[0.063rem] border-neutral-100
     hover:bg-neutral-100 hover:text-neutral-600 hover:border-0
     active:bg-neutral-200 active:text-neutral-600 active:border-0
     disabled:bg-neutral-200 disabled:text-neutral-900 disabled:opacity-40 disabled:border-0
     dark:bg-neutral-600 dark:text-neutral-300 dark:border-neutral-500
     dark:hover:bg-neutral-600 dark:hover:text-neutral-100 
     dark:active:bg-neutral-800 dark:active:text-neutral-100
     dark:disabled:bg-neutral-600 dark:disabled:text-neutral-100 dark:disabled:opacity-40`,
    RED: ` 
     bg-red-100 text-red-600 
     hover:bg-red-200 active:bg-red-300
     disabled:bg-red-100 disabled:text-red-600 disabled:opacity-40 
     dark:bg-red-300 dark:text-white
     dark:hover:bg-red-400 dark:active:bg-red-500  
     dark:disabled:bg-red-300 dark:disabled:text-white dark:disabled:opacity-40`,
    TERTIARY: ` 
     bg-[#ffffff1a] text-neutral-500 
     hover:text-teal-500                            
     disabled:text-neutral-300
     dark:text-neutral-200
     dark:hover:text-teal-400
     dark:disabled:text-neutral-500`,
  },
};

export const SIZE = {
  TYPOGRAPHY: {
    H1: 'text-6xl',
    H2: 'text-5xl',
    H3: 'text-4xl',
    H4: 'text-3xl',
    BODY1: 'text-2xl',
    BODY2: 'text-xl',
    BODY3: 'text-lg',
    BODY4: 'text-base',
    BODY5: 'text-sm',
    BODY6: 'text-xs',
  },
  BUTTON: {
    SMALL: 'h-10 w-[5.94rem]',
    MEDIUM: 'h-10 w-40',
    LARGE: 'h-10 w-[11.88rem]',
  },
  INPUT: {
    SMALL: 'h-6 w-52',
    MEDIUM: 'h-10 w-56',
    LARGE: 'h-10 w-64',
    X_LARGE: 'h-10 w-[60rem]',
  },
};
