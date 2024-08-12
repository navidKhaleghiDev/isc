import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import PhUser from '@iconify-icons/ph/user';
import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { Divider } from '@ui/atoms/Divider';
import { regexPattern } from '@ui/atoms/Inputs';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { TitleSection } from '@ui/atoms/TitleSection';
import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';

type SettingValues = {
  email: string;
  password: string;
  password_r: string;
};

export function ProfileSettings() {
  const {
    control,
    handleSubmit,
    setError: setPasswordRrror,
  } = useForm<SettingValues>();
  const { user } = useUserContext();
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async ({
    email,
    password,
    password_r,
  }: SettingValues) => {
    if (password_r !== password) {
      setPasswordRrror(
        'password_r',
        {
          message: 'تکرار گذرواژه صحیح نیست',
        },
        {
          shouldFocus: true,
        }
      );
      return;
    }

    await API_USERS_PATCH(user?.id as string, {
      email,
      password,
    })
      .then(() => {
        toast.success('تغییرات با موفقیت انجام شد.');
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <TitleSection label="Profile" />
      <Divider />
      {error && (
        <Typography color="red" size="body3" className="mb-10">
          {error}
        </Typography>
      )}
      <form
        className="w-[20rem] h-full flex flex-col pt-4 justify-around items-center max-w-xxl"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <BaseInput
            fullWidth
            control={control}
            placeholder="ایمیل"
            id="email"
            name="email"
            type="text"
            endIcon={PhUser}
            rules={{
              required: regexPattern.required,
            }}
          />
          <PasswordInput
            name="password"
            control={control}
            placeholder="کلمه عبور جدید"
          />
          <PasswordInput
            name="password_r"
            control={control}
            placeholder="تکرار کلمه عبور جدید"
          />
        </div>
        <BaseButton submit label="ذخیره تغییرات" size="md" fullWidth />
      </form>
    </div>
  );
}
