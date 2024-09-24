import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { baseCheckBoxStyles } from './styles';

export interface BaseCheckBoxProps
  extends VariantProps<typeof baseCheckBoxStyles> {
  id: string;
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  className?: string;
  error?: string;
  hiddenError?: boolean;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
}

export interface BaseCheckBoxControllerProps<T extends FieldValues>
  extends Omit<BaseCheckBoxProps, 'disabled' | 'onChange' | 'checked'> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
}
