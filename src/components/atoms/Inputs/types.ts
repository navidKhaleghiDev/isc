import { IconType } from '@src/types/global';
import { VariantProps } from 'class-variance-authority';
import { HTMLInputTypeAttribute } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';
import { DateObject } from 'react-multi-date-picker';

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
    | 'file'
    | 'date'
    | 'datetime-local'
    | 'time';
  label?: string;
  placeholder?: string;
  className?: string;
  startIcon?: string;
  endIcon?: IconType;
  hiddenError?: boolean;
  onClickIcon?: () => void;
  iconButtonIcon?: string;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  pureValue?: string;
  pureError?: string;
  ltrLabel?: boolean;

  // inputProps?: InputHTMLAttributes<HTMLInputElement>;
  min?: string | number;
  max?: string | number;
}

export interface DatePickerProps extends BaseInputProps<any> {
  minDate?: string | number | DateObject | Date;
  maxDate?: string | number | DateObject | Date;
  showTimePicker?: boolean;
  format?: string;
}

export interface SearchInputProps extends VariantProps<typeof baseInputStyles> {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export type ColorIndent = 'default' | 'error' | undefined | null;
