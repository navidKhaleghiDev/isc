import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from 'react-hook-form';
import { baseSwitchStyles } from './styles';

export interface BaseSwitchProps extends VariantProps<typeof baseSwitchStyles> {
  name: string;
  defaultValue?: string;
  defaultChecked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  error?: string;
  value?: string | number | readonly string[];
  dir?: 'ltr' | 'rtl';
  onChange: (event: boolean) => void;
}

export interface BaseSwitchControllerProps<T extends FieldValues>
  extends Omit<BaseSwitchProps, 'onChange' | 'checked' | 'value'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: PathValue<T, Path<T>>;
}
