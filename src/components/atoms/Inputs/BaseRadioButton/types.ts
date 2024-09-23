import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

import { inputRadioButtonStyles } from './styles';

export interface BaseRadioButtonProps
  extends VariantProps<typeof inputRadioButtonStyles> {
  id: string;
  name: string;
  defaultValue?: string;
  label?: string;
  className?: string;
  onChange?: (event: boolean) => void;
  value?: string | number | readonly string[];
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
  disabled?: boolean;
}

export interface BaseRadioButtonControllerProps<T extends FieldValues>
  extends VariantProps<typeof inputRadioButtonStyles> {
  id: string;
  name: FieldPath<T>;
  defaultValue?: string;
  label?: string;
  className?: string;
  onChange?: (event: boolean) => void;
  value?: string | number | readonly string[];
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
  control?: Control<T>;
  rules?: RegisterOptions<T>;
  disabled?: boolean;
}
