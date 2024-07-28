import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

export interface IOptionSelect {
  id?: string | number;
  value?: string | number;
  label: string;
}

export type TValueOnChange = (value: { [key: string]: any }) => void;
export interface DropdownProps<T extends FieldValues> {
  id: string;
  control?: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  options: IOptionSelect[];
  fullWidth?: boolean;
  placeHolder: string;
  className?: string;
  defaultValue?: any;
  label?: string;
  loading?: boolean;
  leftLabel?: boolean;
  valueOnChange?: TValueOnChange;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export type StateType = {
  activeOption: IOptionSelect | null;
  openOptions: boolean;
};
