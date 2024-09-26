import { useState } from 'react';
import { BaseRadioButton } from '@ui/atoms/Inputs/BaseRadioButton';
import { BaseRadioButtonController } from '@ui/atoms/Inputs/BaseRadioButton/Controller';

import { useForm } from 'react-hook-form';

interface MyFormStyle {
  radioSelection: string;
}

export function BaseRadioButtonTest() {
  const [selectedValue, setSelectedValue] = useState('radio2');

  const { handleSubmit, control } = useForm<MyFormStyle>({
    defaultValues: {
      radioSelection: 'radio3',
    },
  });

  const onChangeRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // ⚠ During testing and reviewing, uncomment return, comment, and console.log. The reason for this is a lint error related to console.
  const onSubmit = (data: any) => {
    return data;
    // console.log('Selected Radio:', data);
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-200 max-w-60 rounded-lg"
      >
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
        />
        <BaseRadioButtonController
          id="radio4"
          name="radioSelection"
          value="radio4"
          control={control}
          label="second controlled radio"
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="mt-5 dark:text-white">
        <p>unController Answer: {selectedValue}</p>
      </div>
    </div>
  );
}
