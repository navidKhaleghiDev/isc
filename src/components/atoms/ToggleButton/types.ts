import { VariantProps } from 'class-variance-authority';

import { toggleStyles } from './styles';

export interface ButtonOptions {
  id: number;
  label: string;
}

export interface ToggleButtonProps extends VariantProps<typeof toggleStyles> {
  buttonOption: ButtonOptions[];
  onChange: (optionIndex: number) => void;
  className?: string;
}
