import { VariantProps } from 'class-variance-authority';
import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';
import { baseInputStyles } from './styles';

export interface BaseInputProps<T extends FieldValues>
  extends VariantProps<typeof baseInputStyles> {
  id: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: any;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'time';
  label?: string;
  placeholder?: string;
  className?: string;
  startIcon?: string;
  endIcon?: string;
}

export interface SearchInputProps extends VariantProps<typeof baseInputStyles> {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}
