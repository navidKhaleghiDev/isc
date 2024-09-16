export interface SingleRangeSliderProps {
  min: number;
  max: number;
  initialValue: number;
  distance: number;
  onChange?: (range: { max: number; distance: number }) => void;
}
export interface DoubleRangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  distance: number;
  onChange?: (range: { min: number; max: number; distance: number }) => void;
}
