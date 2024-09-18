import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { baseSwitchStyles } from './styles';

export interface BaseSwitchProps<T extends FieldValues>
  extends VariantProps<typeof baseSwitchStyles> {
  name: FieldPath<T>;
  defaultValue?: string;
  defaultChecked?: boolean;
  className?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  error?: string;
  value?: string | number | readonly string[];
  dir?: 'ltr' | 'rtl';
  onChange?: (event: boolean) => void;
}

export interface BaseSwitchControllerProps<T extends FieldValues>
  extends VariantProps<typeof baseSwitchStyles> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: string;
  className?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  onChange?: (event: boolean) => void;
}
