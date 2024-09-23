import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from 'react-hook-form';

import { baseCheckBoxStyles } from './styles';

export interface BaseCheckBoxProps
  extends VariantProps<typeof baseCheckBoxStyles> {
  id: string;
  name: string;
  defaultValue?: string;
  label?: string;
  className?: string;
  onChange: (checkValue: boolean) => void;
  defaultChecked?: boolean;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
}

export interface BaseCheckBoxControllerProps<T extends FieldValues>
  extends Omit<BaseCheckBoxProps, 'disabled'> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: PathValue<T, Path<T>>;
}
