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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
}

export interface BaseCheckBoxControllerProps<T extends FieldValues>
  extends BaseCheckBoxProps {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: PathValue<T, Path<T>>;
}
