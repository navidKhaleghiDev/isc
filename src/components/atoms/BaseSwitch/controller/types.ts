import { VariantProps } from 'class-variance-authority';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { baseSwitchStyles } from '../styles';

export interface BaseSwitchProps<T extends FieldValues>
  extends VariantProps<typeof baseSwitchStyles> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  defaultValue?: string;
  className?: string;
  ltrLabel?: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (event: boolean) => void;
}
