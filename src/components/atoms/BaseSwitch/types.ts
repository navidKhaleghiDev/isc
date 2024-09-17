import { FieldPath, FieldValues } from 'react-hook-form';

export interface BaseSwitchProps<T extends FieldValues> {
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
