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
  defaultValue?: string | number;
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
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  dir?: 'rtl' | 'ltr';
  min?: string | number;
  max?: string | number;
}

export interface BaseInputControllerProps<T extends FieldValues>
  extends Omit<BaseInputProps, 'onChange' | 'value' | 'error' | 'disabled'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: PathValue<T, Path<T>>;
}
