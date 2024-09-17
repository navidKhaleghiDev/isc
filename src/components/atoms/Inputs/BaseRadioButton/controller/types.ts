import { Control, FieldValues, RegisterOptions } from 'react-hook-form';
import { BaseRadioButtonProps } from '../types';

export interface BaseRadioButtonControlProps<T extends FieldValues>
  extends BaseRadioButtonProps<any> {
  control: Control<T>;
  rules: RegisterOptions<T>;
}
