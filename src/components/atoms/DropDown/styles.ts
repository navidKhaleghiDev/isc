import { PALLET, SIZE } from '@src/constants/theme';
import { cva } from 'class-variance-authority';

export const baseDropDownStyles = cva(
  'flex justify-between items-center px-2',
  {
    variants: {
      intent: {
        default: `${PALLET.TEXT_COLOR.NEUTRAL_DARK} shadow-sm border ${PALLET.BORDER_COLOR.NEUTRAL_LIGHT} rounded-lg focus:border-2 focus:border-teal-500 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400 disabled:shadow-none text-base`,
        error: 'text-red-600  border-2 border-red-600 ',
      },
      fullWidth: {
        true: 'w-full',
      },
      selected: {
        true: 'text-teal-600',
      },
      size: {
        xs: `w-52 h-6 py-1 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-40 h-10 text-md${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-[220px] h-10 text-base ${SIZE.TYPOGRAPHY.BODY3}`,
        lg: `w-64 h-10 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] h-16 text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'md',
    },
  }
);

export const optionSelectStyles = cva(
  `absolute block bg-white rounded-lg ${PALLET.BORDER_COLOR.NEUTRAL_LIGHT} text-neutral-400  shadow-sm text-left mt-[7px] border max-h-20 overflow-y-auto z-10`,
  {
    variants: {
      isShow: {
        false: 'hidden',
      },
      fullWidth: {
        true: 'w-full',
      },
      size: {
        xs: `w-52 ${SIZE.TYPOGRAPHY.BODY4}`,
        sm: `w-[18.75rem] text-md ${SIZE.TYPOGRAPHY.BODY3}`,
        md: `w-64 text-lg ${SIZE.TYPOGRAPHY.BODY3} `,
        lg: `w-[60rem] text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
        xl: `w-[60rem] text-xl ${SIZE.TYPOGRAPHY.BODY2}`,
      },
    },
    defaultVariants: {
      isShow: false,
      size: 'md',
    },
  }
);
