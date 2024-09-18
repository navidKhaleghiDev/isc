export interface SingleRangeSliderProps {
  min: number;
  max: number;
  initialValue: number;
  hiddenLable?: boolean;
  onChange?: (range: { max: number }) => void;
}
export interface DoubleRangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  hiddenLable?: boolean;
  onChange?: (range: { min: number; max: number }) => void;
}
