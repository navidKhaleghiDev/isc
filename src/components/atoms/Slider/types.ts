export interface SingleRangeSliderProps {
  min: number;
  max: number;
  initialValue: number;
  onChange?: (range: { max: number }) => void;
}
export interface DoubleRangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  onChange?: (range: { min: number; max: number }) => void;
}
