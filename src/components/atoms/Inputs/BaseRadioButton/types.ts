import { VariantProps } from 'class-variance-authority';
import { FieldPath, FieldValues, UseFormSetError } from 'react-hook-form';
import { baseRadioButton } from './styles';

export interface BaseRadioButtonProps<T extends FieldValues>
  extends VariantProps<typeof baseRadioButton> {
  id: string;
  name: FieldPath<T>;
  setError?: UseFormSetError<T>;
  defaultValue?: string;
  label?: string;
  hiddenError?: boolean;
  className?: string;
  pureOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pureValue?: string | number | readonly string[];
  pureError?: string;
  checked?: boolean;
  dir?: 'rtl' | 'ltr';
}
