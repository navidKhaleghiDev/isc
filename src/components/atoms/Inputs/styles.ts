import { SIZE, PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  `px-3 py-2.5 flex rounded-lg outline-none border focus:border-2 
  placeholder:text-right placeholder:text-rtl shadow-sm`,
  {
    variants: {
      intent: {
        default: `text-neutral-400 border focus:${PALLET.BORDER_COLOR.TEAL} border-neutral-300 focus:placeholder-neutral-900 focus:text-neutral-900  disabled:bg-neutral-100 disabled:text-neutral-300 disabled:${PALLET.BORDER_COLOR.NEUTRAL_LIGHT} disabled:shadow-none`,
        error: `text-neutral-900 border-2 ${PALLET.BORDER_COLOR.RED} placeholder-neutral-900`,
      },
      fullWidth: {
        true: 'w-full',
      },
      ltrPlaceHolder: {
        true: 'placeholder:text-left',
        false: 'placeholder:text-right placeholder:text-rtl',
      },
      size: {
        none: ``,
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-[18.75rem] h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `${SIZE.INPUT.MEDIUM} ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `${SIZE.INPUT.LARGE} ${SIZE.TYPOGRAPHY.BODY4}`,
        xl: `w-[60rem] h-16 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        freeWidth: `w-full h-10 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);

export const iconBaseInputStyles = cva(
  'absolute inset-y-0 flex px-2 items-center fill-current',
  {
    variants: {
      intent: {
        default: 'text-neutral-500',
        error: 'text-red-500',
      },
      right: {
        true: 'right-0',
        false: 'left-0',
      },
    },
    defaultVariants: {
      intent: 'default',
      right: false,
    },
  }
);

export const baseTextareaStyles = cva(
  'px-2.5 py-2.5 block rounded-lg outline-none placeholder:text-right placeholder:text-rtl',
  {
    variants: {
      intent: {
        default: '',
        error: '',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        xs: ``,
        sm: ``,
        md: ``,
        lg: ``,
        xl: ``,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'sm',
    },
  }
);

export const baseCheckBoxStyles = cva(
  `before:content[''] peer relative cursor-pointer appearance-none border rounded transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-teal-400 before:opacity-0 before:transition-opacity checked:border-teal-500 checked:bg-teal-500 checked:before:bg-teal-500`,
  {
    variants: {
      intent: {
        default: 'border-neutral-200 bg-neutral-100',
        darkMode: 'border-neutral-400 bg-neutral-500',
        error: '',
      },
      size: {
        sm: `size-4`,
        md: `size-6`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseSelectStyles = cva(
  `px-2 py-1.5 appearance-none flex rounded-lg outline-none bg-white placeholder:text-right border-neutral-300 placeholder:text-rtl relative`,
  {
    variants: {
      intent: {
        default: `text-neutral-900 focus:border-teal-500 border shadow-sm focus:border-2 ${PALLET.BORDER_COLOR.NEUTRAL_MIDDLE} focus:placeholder-neutral-900 focus:text-neutral-900 disabled:bg-neutral-100 disabled:text-neutral-300 disabled:border-neutral-500 disabled:shadow-none`,
        primary:
          'bg-white w-fit disabled:text-neutral-300 rounded-md text-xs text-neutral-600 cursor-pointer',
        error: `text-neutral-900 border-2 ${PALLET.BORDER_COLOR.RED} placeholder-neutral-900`,
      },
      fullWidth: {
        true: 'w-full',
      },
      ltrPlaceHolder: {
        true: 'placeholder:text-left',
        false: 'placeholder:text-right placeholder:text-rtl',
      },
      size: {
        none: ``,
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-40 h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[13.75rem] h-10 ${SIZE.TYPOGRAPHY.BODY4}`,
        lg: `w-64 h-10  ${SIZE.TYPOGRAPHY.BODY4}`,
        xl: '',
        freeWidth: `w-full h-10 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);
