import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';
import { IconifyIcon } from '@iconify/react';

import { baseInputStyles } from './styles';

export interface BaseInputProps extends VariantProps<typeof baseInputStyles> {
  id: string;
  name: string;
  defaultValue?: any;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'file'
    | 'date'
    | 'datetime-local'
    | 'time';
  label?: string;
  placeholder?: string;
  className?: string;
  startIcon?: string | IconifyIcon;
  endIcon?: string | IconifyIcon;
  hiddenError?: boolean;
  helpText?: string;
  hiddenHelpText?: boolean;
  onClickIcon?: () => void;
  iconButtonIcon?: string | IconifyIcon;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
  min?: string | number;
  max?: string | number;
}

export interface BaseInputControlProps<T extends FieldValues>
  extends VariantProps<typeof baseInputStyles> {
  id: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: PathValue<T, Path<T>>;
  type?:
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
    | 'file'
    | 'date'
    | 'datetime-local'
    | 'time';
  label?: string;
  placeholder?: string;
  className?: string;
  startIcon?: string | IconifyIcon;
  endIcon?: string | IconifyIcon;
  hiddenError?: boolean;
  onClickIcon?: () => void;
  helpText?: string;
  hiddenHelpText?: boolean;
  iconButtonIcon?: string | IconifyIcon;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pureValue?: string;
  pureError?: string;
  dir?: 'rtl' | 'ltr';
  min?: string | number;
  max?: string | number;
}
