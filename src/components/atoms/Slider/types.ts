export interface BaseSliderProps {
  min: number;
  max: number;
  initialValue: number;
  hiddenLable?: boolean;
  onChange: (range: { max: number }) => void;
}

export interface MultipleBaseSliderProps
  extends Omit<BaseSliderProps, 'onChange' | 'initialValue'> {
  initialMin: number;
  initialMax: number;
  hiddenLable?: boolean;
  onChange: (range: { min: number; max: number }) => void;
}
