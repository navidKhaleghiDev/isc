export interface ButtonOption {
  id: string | number;
  name?: string;
  label: string;
}

export interface ToggleButtonProps {
  buttonLabels: ButtonOption[];
  onChange: (selected: ButtonOption) => void;
  className?: string;
}
