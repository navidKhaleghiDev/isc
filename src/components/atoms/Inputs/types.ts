import { VariantProps } from 'class-variance-authority';
import { HTMLInputTypeAttribute, MouseEventHandler } from 'react';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetError,
} from 'react-hook-form';
import { IconifyIcon } from '@iconify/react';
import { DateObject } from 'react-multi-date-picker';

import { baseSelectStyles, baseOtpStyles } from './styles';
import { baseInputStyles } from './BaseInput/styles';
import { IOptionSelect } from './BaseSelect/OptionSelect';

export interface BaseInputProps<T extends FieldValues>
  extends VariantProps<typeof baseInputStyles> {
  id: string;
  name: FieldPath<T>;
  control?: Control<T>;
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
  className?: string;
  startIcon?: string | IconifyIcon;
  endIcon?: string | IconifyIcon;
  placeholder: string;
  ltrPlaceHolder?: boolean;
  hiddenError?: boolean;
  onClickIcon?: () => void;
  iconButtonIcon?: string | IconifyIcon;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pureValue?: string;
  pureError?: string;
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
  onClickIcon?: () => void;
  iconButtonIcon?: string | IconifyIcon;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pureValue?: string;
  pureError?: string;
  dir?: 'rtl' | 'ltr';
  min?: string | number;
  max?: string | number;
}
export interface BaseInputNumberProps<T extends FieldValues>
  extends VariantProps<typeof baseInputStyles> {
  id: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: number;
  label?: string;
  placeholder?: string;
  className?: string;
  hiddenError?: boolean;
  onClickIcon?: () => void;
  iconButtonIcon?: string | IconifyIcon;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  pureValue?: string;
  pureError?: string;
  dir?: 'rtl' | 'ltr';

  // inputProps?: InputHTMLAttributes<HTMLInputElement>;
  min?: number;
  max?: number;
}

export interface IBaseSelectProp<T extends FieldValues>
  extends VariantProps<typeof baseSelectStyles> {
  selectOptions: IOptionSelect[];
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
  endIcon?: string;
  hiddenError?: boolean;
  onClickIcon?: () => void;
  iconButtonIcon?: string;
  pureValue?: string;
  pureError?: string;
  ltrLabel?: boolean;
  ref: React.LegacyRef<HTMLSelectElement>;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  onClickSelect?: (event: MouseEventHandler<HTMLSelectElement>) => void;
  pureOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface DatePickerProps extends BaseInputProps<any> {
  minDate?: string | number | DateObject | Date;
  maxDate?: string | number | DateObject | Date;
  showTimePicker?: boolean;
  ltrPlaceHolder: boolean;
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

export interface BaseOtpProp<T extends FieldValues>
  extends VariantProps<typeof baseOtpStyles> {
  name: FieldPath<T>;
  control: Control<T>;
  valueLength: number;
  rules?: RegisterOptions<T>;
  className?: string;
  fullWidth?: boolean;
  pureError?: string;
  dir?: 'rtl' | 'ltr';
}

export type THandleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number,
  field: { value: string; onChange: (value: string) => void }
) => void;
export type THandleKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  index: number
) => void;
