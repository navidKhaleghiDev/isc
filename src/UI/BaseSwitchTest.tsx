import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BaseSwitch } from '@ui/atoms/BaseSwitch';
import { BaseSwitchController } from '@ui/atoms/BaseSwitch/Controller';

interface FormValues {
  switch2: boolean;
}
function BaseSwitchTest() {
  const [isChecked, setIsChecked] = useState(false);
  const [fromValue, setFormValue] = useState('');
  const [formControllerValue, setFormControllerValue] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    setFormValue(`${event.target.name}:${event.target.checked}`);
  };
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      switch2: false,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setFormControllerValue(data.switch2);
  };

  return (
    <div>
      <div>
        <BaseSwitch
          size="responsive"
          name="switch1"
          onChange={handleChange}
          disabled={false}
          checked={isChecked}
          id="switch1"
        />
        <p>{fromValue}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseSwitchController
          id="switch2"
          name="switch2"
          size="responsive"
          control={control}
          //   rules={{ required: `error` }}
        />
        <p>{formControllerValue ? 'switch2 checked' : 'switch2 not checked'}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BaseSwitchTest;
