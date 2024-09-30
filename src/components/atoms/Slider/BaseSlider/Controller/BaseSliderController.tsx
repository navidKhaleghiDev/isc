import { Controller, useForm } from 'react-hook-form';

import { BaseSlider } from '../BaseSlider';
import { BaseSliderProps } from '../../types';

interface FormValue {
  max: number;
}

export function BaseSliderController(props: BaseSliderProps) {
  const { minValue, maxValue, defaultValue, showLabel } = props;
  const { control, setValue } = useForm<FormValue>({
    defaultValues: { max: defaultValue },
  });

  return (
    <Controller
      name="max"
      control={control}
      render={({ field }) => (
        <BaseSlider
          minValue={minValue}
          maxValue={maxValue}
          defaultValue={field.value}
          showLabel={showLabel}
          onChange={(range) => {
            setValue('max', range.max);
            field.onChange(range.max);
          }}
        />
      )}
    />
  );
}
