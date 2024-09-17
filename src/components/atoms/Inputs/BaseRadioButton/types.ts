import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';

export interface BaseRadioButtonProps<T extends FieldValues> {
  id: string;
  name: FieldPath<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: string;
  label?: string;
  hiddenError?: boolean;
  className?: string;
  onChange?: (event: string) => void;
  value?: string | number | readonly string[];
  error?: string;
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
}
