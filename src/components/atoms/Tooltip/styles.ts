import { cva } from 'class-variance-authority';

export const tooltipStyles = cva(
  'absolute -z-10 h-2.5 w-2.5 rotate-45 rounded-sm bg-neutral-800 dark:bg-neutral-400',
  {
    variants: {
      position: {
        left: 'right-[-3px] top-1/2 -translate-y-1/2',
        topStart: 'bottom-[-3px] right-1 -translate-x-2/3',
        top: 'bottom-[-3px] left-1/2 -translate-x-1/2',
        topEnd: 'bottom-[-3px] left-1 translate-x-2/3',
        right: 'left-[-3px] top-1/2 -translate-y-1/2',
        bottomStart: 'top-[-3px] right-1 -translate-x-2/3',
        bottom: 'top-[-3px] left-1/2 -translate-x-1/2',
        bottomEnd: 'top-[-3px] left-1 translate-x-2/3',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);

export const containerTooltipStyles = cva(
  'absolute z-20 whitespace-nowrap rounded-lg bg-neutral-800 dark:bg-neutral-400 py-1 px-1 text-xs text-white',
  // 'absolute z-20 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100',
  {
    variants: {
      position: {
        left: 'right-full top-1/2  mr-3 -translate-y-1/2',
        topStart: 'bottom-full left-1/2  mb-3 -translate-x-1/2',
        top: 'bottom-full left-1/2  mb-3 -translate-x-1/2',
        topEnd: 'bottom-full left-1/2  mb-3 -translate-x-1/2',
        right: 'left-full top-1/2  ml-3 -translate-y-1/2',
        bottomStart: 'top-full left-1/2  mt-3 -translate-x-1/2',
        bottom: 'top-full left-1/2  mt-3 -translate-x-1/2',
        bottomEnd: 'top-full left-1/2  mt-3 -translate-x-1/2',
      },
      show: {
        true: '',
        false: 'hidden',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
);
