import { VariantProps } from 'class-variance-authority';
import { FieldPath, FieldValues } from 'react-hook-form';
import { baseSwitchStyles } from './styles';

export interface BaseSwitchProps<T extends FieldValues>
  extends VariantProps<typeof baseSwitchStyles> {
  name: FieldPath<T>;
  defaultValue?: string;
  defaultChecked?: boolean;
  className?: string;
  ltrLabel?: boolean;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  error?: string;
  value?: string | number | readonly string[];
  onChange?: (event: boolean) => void;
}
