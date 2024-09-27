import { Controller, useForm } from 'react-hook-form';

import { MultipleBaseSlider } from '../MultipleBaseSlider';
import { MultipleBaseSliderControllerProps } from '../../types';

interface FormValue {
  min: number;
  max: number;
}

export function MultipleBaseSliderController(
  props: MultipleBaseSliderControllerProps
) {
  const { min, max, initialMin, initialMax, hiddenLabel, onChange } = props;

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
            onChange={({ min: newMin }) => {
              setValue('min', newMin);
              field.onChange(newMin);
              onChange({ min: newMin, max: field.value });
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
            onChange={({ max: newMax }) => {
              setValue('max', newMax);
              field.onChange(newMax);
              onChange({ max: newMax, min: field.value });
            }}
          />
        )}
      />
    </>
  );
}
