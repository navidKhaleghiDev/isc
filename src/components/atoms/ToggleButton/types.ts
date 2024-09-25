import { VariantProps } from 'class-variance-authority';

import { toggleStyles } from './styles';

export interface ButtonOptions {
  id: string | number;
  name?: string;
  label: string;
}

export interface ToggleButtonProps extends VariantProps<typeof toggleStyles> {
  buttonOption: ButtonOptions[];
  onChange: (selected: ButtonOptions) => void;
  className?: string;
}
