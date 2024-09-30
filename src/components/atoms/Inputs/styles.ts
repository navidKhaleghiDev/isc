import { SIZE, PALLET } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseInputStyles = cva(
  `peer p-2 flex text-sm rounded-lg outline-none border 
    h-10`,
  {
    variants: {
      intent: {
        default: `text-gray-500 border border-gray-300 focus:border-gray-500 focus:placeholder-gray-900 focus:text-gray-900  disabled:bg-gray-100 disabled:text-gray-300 disabled:${PALLET.BORDER_COLOR.NEUTRAL_LIGHT}`,
        error: `text-gray-900  border-2 ${PALLET.BORDER_COLOR.RED} placeholder-gray-900`,
      },
      fullWidth: {
        true: 'w-full',
      },
      // ltrPlaceHolder: {
      //   true: 'placeholder:text-left',
      //   false: 'placeholder:text-right placeholder:text-rtl',
      // },
      size: {
        none: '',
        xs: `w-52 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-40`,
        md: `w-[15.94rem]`,
        lg: `w-[21.88rem]`,
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
  'absolute inset-y-0 flex px-2 items-center active:text-gray-500 fill-current',
  {
    variants: {
      intent: {
        default: 'text-gray-300 peer-focus:text-gray-500',
        error: 'text-red-500 peer-focus:border-red-500',
      },
      right: {
        true: 'right-0',
        false: 'left-0',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  }
);

export const baseTextareaStyles = cva(
  'p-2 block rounded-lg border-2 outline-none border-gray-300 placeholder:text-right placeholder:text-rtl disabled:border-gray-300 disabled:text-gray-300 focus:border-gray-900 focus:placeholder:text-gray-900',
  {
    variants: {
      intent: {
        default: '',
        error: 'border-red-600',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        sm: `w-40`,
        md: `w-64`,
        lg: `w-[21.875rem]`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const baseSelectStyles = cva(
  `px-2 py-1.5 appearance-none flex rounded-lg outline-none bg-white placeholder:text-right border-gray-300 placeholder:text-rtl relative`,
  {
    variants: {
      intent: {
        default: `text-gray-900 focus:border-teal-500 border shadow-sm focus:border-2 ${PALLET.BORDER_COLOR.NEUTRAL_MIDDLE} focus:placeholder-gray-900 focus:text-gray-900 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-500 disabled:shadow-none`,
        primary:
          'bg-white w-fit disabled:text-gray-300 rounded-md text-xs text-gray-600 cursor-pointer',
        error: `text-gray-900 border-2 ${PALLET.BORDER_COLOR.RED} placeholder-gray-900`,
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
        sm: `w-40 h-10 text-md ${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[13.75rem] h-10 ${SIZE.TYPOGRAPHY.BODY4}`,
        lg: `w-64 h-10 ${SIZE.TYPOGRAPHY.BODY4}`,
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

export const baseOtpStyles = cva(
  'block rounded-lg text-gray-400 outline-none text-center text-base',
  {
    variants: {
      intent: {
        default:
          'border text-gray-300 border-gray-500 focus:border-gray-500 focus:text-gray-500 focus:placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-gray-300 disabled:shadow-none',
        error: 'text-gray-900 border border-red-600 placeholder-red-400',
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
        xs: ``,
        sm: ``,
        md: `size-10 ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `size-14 ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: ``,
      },
    },
    defaultVariants: {
      intent: 'error',
      size: 'md',
    },
  }
);
