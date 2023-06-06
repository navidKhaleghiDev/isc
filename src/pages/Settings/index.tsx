import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type TypeInput = {
  current: boolean;
  repeatNew: boolean;
  new: boolean;
};

export function SettingsPage() {
  const { control } = useForm();
  const [showPassword, setShowPassword] = useState<TypeInput>({
    current: false,
    repeatNew: false,
    new: false,
  });
  const handleShowPassword = (name: keyof TypeInput) => {
    setShowPassword({ ...showPassword, [name]: !showPassword[name] });
  };
  return (
    <div className="h-full flex flex-col justify-around items-center p-12 px-32">
      <div className="w-full flex flex-col items-center justify-center">
        <BaseInput
          name="current"
          size="md"
          id="current"
          control={control}
          placeholder="کلمه عبور فعلی"
          type={showPassword.current ? 'text' : 'password'}
          onClickIcon={() => handleShowPassword('current')}
          iconButtonIcon={showPassword.current ? 'ph:eye' : 'ph:eye-slash'}
        />

        <BaseInput
          size="md"
          name="new"
          id="new"
          placeholder="کلمه عبور جدید"
          control={control}
          type={showPassword.new ? 'text' : 'password'}
          onClickIcon={() => handleShowPassword('new')}
          iconButtonIcon={showPassword.new ? 'ph:eye' : 'ph:eye-slash'}
        />

        <BaseInput
          size="md"
          name="repeatNew"
          id="repeatNew"
          control={control}
          placeholder="تکرار کلمه عبور جدید"
          type={showPassword.repeatNew ? 'text' : 'password'}
          onClickIcon={() => handleShowPassword('repeatNew')}
          iconButtonIcon={showPassword.repeatNew ? 'ph:eye' : 'ph:eye-slash'}
        />
      </div>
      <BaseButton label="ذخیره تغییرات" size="xl" />
    </div>
  );
}
