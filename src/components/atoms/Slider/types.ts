export interface SingleRangeSliderProps {
  min: number;
  max: number;
  initialValue: number;
  step: number;
  onChange: (value: number) => void;
}
export interface DoubleRangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  step: number;
  onChange: any;
}
