import { Controller, useForm } from 'react-hook-form';

import { BaseSliderProps } from '../../types';
import { BaseSlider } from '../BaseSlider';

export interface FormValue{
    max:number;
}
export interface ControllerBaseSliderProps extends Omit<BaseSliderProps,'onChange'>{}

export function ControllerBaseSlider(props:ControllerBaseSliderProps){
   const {min,max,initialValue,hiddenLable}=props;
   const {control,setValue}=useForm<FormValue>({defaultValues:{max:initialValue}})

   return(
<Controller
      name="max"
      control={control}
      render={({ field }) => (
        <BaseSlider
          min={min}
          max={max}
          initialValue={field.value}
          hiddenLable={hiddenLable}
          onChange={(range) => {
            setValue('max', range.max);
            field.onChange(range.max);
          }}
        />
      )}
    />
   )
}
