import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_USERS_SERVER_AUTH } from '@src/services/client/users';
import { useUserContext } from '@context/user/userContext';

import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export function AuthenticationForm({
  onChangeStep,
  getProfile,
}: PropsFormType) {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });
  const { user } = useUserContext();
  const [error, setError] = useState<string | null>(null);

  const handelSubmitForm = async ({ email, password }: ILoginFieldValues) => {
    await API_USERS_SERVER_AUTH({ email, password })
      .then(() => {
        if (!user?.device_serial) {
          // user not have device serial
          onChangeStep(ELoginStep.REGISTER_SERIAL_DEVICE);
        } else {
          // login is ok
          getProfile();
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col h-full w-full items-center justify-center"
    >
      <Typography color="neutral" size="h5" className="mb-10">
        برای احراز هویت ایمیل و کلمه عبور مشتری را وراد کنید.
      </Typography>
      {error && (
        <Typography color="red" size="body3" className="mb-10">
          {error}
        </Typography>
      )}

      <div className="w-full flex flex-col items-center justify-end pb-16">
        <BaseInput
          fullWidth
          control={control}
          placeholder="email"
          id="email"
          name="email"
          endIcon="carbon:password"
          rules={{
            required: regexPattern.required,
          }}
        />

        <BaseInput
          fullWidth
          control={control}
          placeholder="گذرواژه"
          id="password"
          name="password"
          type="password"
          endIcon="carbon:password"
          rules={{
            required: regexPattern.required,
          }}
        />
        <BaseButton
          onClick={() => {}}
          label="ثبت"
          className="mt-8"
          size="md"
          submit
          fullWidth
        />
      </div>
    </form>
  );
}
