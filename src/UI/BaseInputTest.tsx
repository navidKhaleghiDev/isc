import { BaseInput } from '@ui/atoms';
import { useState } from 'react';
import PhEyeSlash from '@iconify-icons/ph/eye-slash';
import { BaseInputController } from '@ui/atoms/Inputs/BaseInput/Controller';
import { useForm } from 'react-hook-form';
import { regexPattern } from '@ui/atoms/Inputs';

type MyFormType = {
  userName: string;
};

export function BaseInputTest() {
  const [userName, setUserName] = useState('');
  const [iconClicked, setIconClicked] = useState(false);
  const [showData, setShowData] = useState<MyFormType>();
  const { control, handleSubmit } = useForm<MyFormType>({});
  return (
    <div className="font-kalameh">
      <form className="without controller">
        <BaseInput
          id="Name"
          name="Name"
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          placeholder="نام کاربری"
          iconButtonIcon={PhEyeSlash}
          fullWidth
          onClickIcon={() => setIconClicked(!iconClicked)}
          helpText="there is an help text there is an help text there is an help text there is an help text"
          hiddenHelpText
          error="there is an erorr in our component"
          hiddenError
          dir="rtl"
          label="نام کاربری"
        />
        <p>{userName}</p>
        <p>{iconClicked && 'icon clicked'}</p>
        <button type="submit">submit form</button>
      </form>
      <form
        className="with controller"
        onSubmit={handleSubmit((data) => setShowData(data))}
      >
        <BaseInputController
          id="userName"
          name="userName"
          control={control}
          rules={{ pattern: regexPattern.farsiLetters }}
          placeholder="نام کاربری"
          helpText="there is help text there is help text there is help text there is help text there is help text there is help text"
          fullWidth
          hiddenError
          // disabled
          startIcon={PhEyeSlash}
          dir="rtl"
          label="نام کاربری"
        />
        <p>{showData?.userName}</p>
        <button type="submit">submit form control</button>
      </form>
    </div>
  );
}
