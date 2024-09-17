import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface BaseSwitchProps<T extends FieldValues> {
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
