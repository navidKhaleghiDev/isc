import { VariantProps } from 'class-variance-authority';
import { ChangeEvent } from 'react';
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  error?: string;
  hiddenError?: boolean;
  disabled?: boolean;
}

export interface BaseCheckBoxControllerProps<T extends FieldValues>
  extends Omit<BaseCheckBoxProps, 'onChange' | 'checked' | 'error'> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
}
