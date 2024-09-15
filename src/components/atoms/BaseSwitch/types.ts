import { VariantProps } from 'class-variance-authority';
import { FieldPath, FieldValues } from 'react-hook-form';
import { baseSwitchStyles } from './styles';

export interface BaseSwitchProps<T extends FieldValues>
  extends VariantProps<typeof baseSwitchStyles> {
  id: string;
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
  onClick?: (event: any) => void;
}
