import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';
import { baseTextareaStyles } from '../styles';

export interface BaseTextareaProps<T extends FieldValues>
  extends VariantProps<typeof baseTextareaStyles> {
  id: string;
  name: FieldPath<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: string;
  label?: string;
  pureError?: string;
  disabled: boolean;
  placeholder?: string;
  pureValue?: string;
  dir?: 'rtl' | 'ltr';
  pureOnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
