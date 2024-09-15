import { VariantProps } from 'class-variance-authority';
import { toggleStyles } from './styles';

export interface ButtonOption {
  id: string | number;
  name?: string;
  label: string;
}

export interface ToggleButtonProps extends VariantProps<typeof toggleStyles> {
  buttonLabels: ButtonOption[];
  onChange: (selected: ButtonOption[]) => void;
  className?: string;
}
