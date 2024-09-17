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

export interface BaseCheckBoxControllerProps<TInputValues extends FieldValues>
  extends VariantProps<typeof baseCheckBoxStyles> {
  id: string;
  name: FieldPath<TInputValues>;
  control: Control<TInputValues>;
  rules?: RegisterOptions<TInputValues>;
  defaultValue?: PathValue<TInputValues, Path<TInputValues>>;
  label?: string;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
}

export interface BaseCheckBoxProps
  extends VariantProps<typeof baseCheckBoxStyles> {
  id: string;
  name: string;
  defaultValue?: string;
  label?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
}
