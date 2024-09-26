import { Controller, useForm } from 'react-hook-form';

import { MultipleBaseSlider } from '../MultipleBaseSlider'; 
import { MultipleBaseSliderProps } from '../../types';

export interface FormValue {
  min: number;
  max: number;
}

export interface ControllerMultipleBaseSliderProps extends Omit<MultipleBaseSliderProps, 'onChange'> {
  initialMin: number;
  initialMax: number;
}

export function ControllerMultipleBaseSlider(props: ControllerMultipleBaseSliderProps) {
  const { min, max, initialMin, initialMax, hiddenLabel } = props;

  const { control, setValue } = useForm<FormValue>({
    defaultValues: { min: initialMin, max: initialMax },
  });

  return (
    <>
      <Controller
        name="min"
        control={control}
        render={({ field }) => (
          <MultipleBaseSlider
            min={min}
            max={max}
            initialMin={field.value}
            initialMax={initialMax} 
            hiddenLabel={hiddenLabel}
            onChange={({ min}) => {
              setValue('min', min);
              field.onChange(min); 
            }}
          />
        )}
      />
      <Controller
        name="max"
        control={control}
        render={({ field }) => (
          <MultipleBaseSlider
            min={min}
            max={max}
            initialMin={initialMin}
            initialMax={field.value}
            hiddenLabel={hiddenLabel}
            onChange={({ max }) => {
              setValue('max', max);
              field.onChange(max);
            }}
          />
        )}
      />
    </>
  );
}
