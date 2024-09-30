export interface BaseSliderProps {
  minValue: number;
  maxValue: number;
  defaultValue?: number;
  showLabel?: boolean;
  onChange: (range: Omit<RangeType, 'min'>) => void;
}

export interface MultipleBaseSliderProps
  extends Omit<BaseSliderProps, 'onChange' | 'defaultValue'> {
  defaultMinValue: number;
  defaultMaxValue: number;
  onChange: (range: RangeType) => void;
}

export interface MultipleBaseSliderControllerProps
  extends MultipleBaseSliderProps {
  control?: any;
}

type RangeType = { min: number; max: number };
