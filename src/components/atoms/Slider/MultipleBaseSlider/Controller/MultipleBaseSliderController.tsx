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
  const {
    minValue,
    maxValue,
    defaultMinValue,
    defaultMaxValue,
    showLabel,
    onChange,
  } = props;

  const { control, setValue } = useForm<FormValue>({
    defaultValues: { min: defaultMinValue, max: defaultMaxValue },
  });

  return (
    <>
      <Controller
        name="min"
        control={control}
        render={({ field }) => (
          <MultipleBaseSlider
            minValue={minValue}
            maxValue={maxValue}
            defaultMinValue={field.value}
            defaultMaxValue={defaultMaxValue}
            showLabel={showLabel}
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
            minValue={minValue}
            maxValue={maxValue}
            defaultMinValue={defaultMinValue}
            defaultMaxValue={field.value}
            showLabel={showLabel}
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
