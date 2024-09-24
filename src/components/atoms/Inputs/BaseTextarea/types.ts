import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';

import { baseTextareaStyles } from './styles';

export interface BaseTextareaProps
  extends VariantProps<typeof baseTextareaStyles> {
  id: string;
  name: string;
  label?: string;
  error?: string;
  disabled: boolean;
  placeholder?: string;
  helpText?: string;
  hiddenHelpText?: boolean;
  value: string | number | readonly string[];
  dir?: 'rtl' | 'ltr';
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  hiddenError?: boolean;
}

export interface BaseTextareaControllerProps<T extends FieldValues>
  extends Omit<BaseTextareaProps, 'error' | 'value' | 'onChange' | 'disabled'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
}
