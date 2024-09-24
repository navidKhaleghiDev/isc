import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { BaseCheckBoxController } from '@ui/atoms/Inputs/BaseCheckBox/Controller';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface MyFormStyle {
  checkBoxState: boolean;
}

export function BaseCheckBoxTest() {
  const [checkItem, setCheckItem] = useState(false);
  const [fromValue, setFormValue] = useState(false);
  const [formControllerValue, setFormControllerValue] = useState(false);
  const { control, handleSubmit } = useForm<MyFormStyle>();

  const handelFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormValue(checkItem);
  };

  return (
    <div className="font-kalameh">
      <form onSubmit={handelFormSubmit}>
        <BaseCheckBox
          id="item"
          name="item"
          onChange={(value) => setCheckItem(value.target.checked)}
          label="گزینه"
          checked={checkItem}
          error="there is an error"
        />
        <p>{fromValue ? 'checked' : 'not Checked'}</p>
        <button type="submit" className="bg-slate-100">
          submit form without Controller
        </button>
      </form>

      <form
        onSubmit={handleSubmit((data) =>
          setFormControllerValue(data.checkBoxState)
        )}
      >
        <BaseCheckBoxController
          id="checkboxController"
          name="checkBoxState"
          control={control}
          label="گزینه"
          rules={{ required: true }}
        />
        <p>{formControllerValue ? 'checked' : 'not Checked'}</p>
        <button type="submit" className="bg-slate-100">
          submit form with Controller
        </button>
      </form>
    </div>
  );
}
