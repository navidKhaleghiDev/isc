import { VariantProps } from 'class-variance-authority';
import { Control, FieldPath, FieldValues, RegisterOptions, UseFormSetError } from 'react-hook-form';

import { inputRadioButtonStyles } from './styles';

export interface BaseRadioButtonProps<T extends FieldValues>
  extends VariantProps<typeof inputRadioButtonStyles> {
  id: string;
  name: FieldPath<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: string;
  label?: string;
  hiddenError?: boolean;
  className?: string;
  onChange?: (event: string) => void;
  value?: string | number | readonly string[];
  error?: string;
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
}

export interface BaseRadioButtonControlProps<T extends FieldValues>
  extends BaseRadioButtonProps<any> {
  control: Control<T>;
  rules: RegisterOptions<T>;
}