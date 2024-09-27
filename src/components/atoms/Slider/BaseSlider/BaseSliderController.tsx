import { Controller, useForm } from 'react-hook-form';

import { BaseSlider } from '../BaseSlider';
import { BaseSliderProps } from '../../types';

interface FormValue {
  max: number;
}

export function BaseSliderController(props: BaseSliderProps) {
  const { min, max, initialValue, hiddenLabel } = props;
  const { control, setValue } = useForm<FormValue>({
    defaultValues: { max: initialValue },
  });

  return (
    <Controller
      name="max"
      control={control}
      render={({ field }) => (
        <BaseSlider
          min={min}
          max={max}
          initialValue={field.value}
          hiddenLabel={hiddenLabel}
          onChange={(range) => {
            setValue('max', range.max);
            field.onChange(range.max);
          }}
        />
      )}
    />
  );
}
