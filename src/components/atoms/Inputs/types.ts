import { VariantProps } from 'class-variance-authority';
import { HTMLInputTypeAttribute } from 'react';
import { Control, UseControllerProps } from 'react-hook-form';
import { baseInputStyles } from './styles';

export interface BaseInputProps
  extends UseControllerProps,
    VariantProps<typeof baseInputStyles> {
  id: string;
  control: Control;
  label?: string;
  placeholder?: string;
  className?: string;
  startIcon?: string;
  endIcon?: string;
  type?: HTMLInputTypeAttribute;
}

export interface SearchInputProps extends VariantProps<typeof baseInputStyles> {
  name: string;
  id: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}
