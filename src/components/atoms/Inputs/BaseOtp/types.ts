import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { baseOtpStyles } from './styles';

export interface BaseOtpProp<T extends FieldValues>
  extends VariantProps<typeof baseOtpStyles> {
  name: FieldPath<T>;
  control: Control<T>;
  valueLength: number;
  rules?: RegisterOptions<T>;
  className?: string;
  disabled?: boolean;
  hiddenError?: boolean;
  fullWidth?: boolean;
  pureError?: string;
  dir?: 'rtl' | 'ltr';
}

export type HandleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  field: { value: string; onChange: (value: string) => void }
) => void;

export type HandleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number
) => void;
