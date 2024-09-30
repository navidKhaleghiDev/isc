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
  setError?: string;
  defaultValue?: string;
  label?: string;
  error?: string;
  disabled: boolean;
  placeholder?: string;
  value?: string;
  dir?: 'rtl' | 'ltr';
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  hiddenError?: boolean;
}

export interface BaseTextareaPropsControl<T extends FieldValues>
  extends VariantProps<typeof baseTextareaStyles> {
  id: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  hiddenError?: boolean;
}
