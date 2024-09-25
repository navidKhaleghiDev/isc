import { useCallback, useEffect, useState } from 'react';
import { BaseRadioButton } from '@ui/atoms/Inputs/BaseRadioButton';
import { BaseRadioButtonController } from '@ui/atoms/Inputs/BaseRadioButton/Controller';

import { useForm } from 'react-hook-form';

export function BaseRadioButtonTest() {
  const [selectedValue, setSelectedValue] = useState('radio2');

  const { handleSubmit, control } = useForm({
    defaultValues: {
      radioSelection: 'radio3',
    },
  });

  const onChangeRadioButton = useCallback((e: any) => {
    setSelectedValue(e.target.value);
  }, []);

  const onSubmit = (data: any) => {
    return data;
    // console.log('Selected Radio:', data);
  };

  useEffect(() => {
    // console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div className="font-kalameh">
      <BaseRadioButton
        id="radio1"
        name="radioUncontrolled"
        value="radio1"
        label="first radio unController"
        onChange={onChangeRadioButton}
      />
      <BaseRadioButton
        id="radio2"
        name="radioUncontrolled"
        value="radio2"
        label="second radio unController"
        onChange={onChangeRadioButton}
        checked={selectedValue === 'radio2'}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseRadioButtonController
          id="radio3"
          name="radioSelection"
          value="radio3"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'error',
            },
          }}
          label="first controlled radio"
          hiddenError
        />
        <BaseRadioButtonController
          id="radio4"
          name="radioSelection"
          value="radio4"
          control={control}
          label="second controlled radio"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
