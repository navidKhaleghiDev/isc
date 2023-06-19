import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';
import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { regexPattern } from '@ui/atoms/Inputs';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type SettingValues = {
  email: string;
  password: string;
  password_r: string;
};

export function SettingsPage() {
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
        setError(err.data.error);
      });
  };

  return (
    <div className="h-full flex justify-center items-center">
      {error && (
        <Typography color="red" size="body3" className="mb-10">
          {error}
        </Typography>
      )}
      <form
        className="h-full flex flex-col justify-around items-center p-12 max-w-xxl"
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
            endIcon="ph:user"
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
        <BaseButton submit label="ذخیره تغییرات" size="xl" />
      </form>
    </div>
  );
}
