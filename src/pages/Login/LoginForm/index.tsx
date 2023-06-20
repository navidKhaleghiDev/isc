import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_USERS_LOGIN } from '@src/services/client/users';
import { useUserContext } from '@context/user/userContext';
import { http } from '@src/services/http';

import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export const STORAGE_KEY_REFRESH_TOKEN = 'refresh';

export function LoginForm({ onChangeStep, getProfile }: PropsFormType) {
  const { setUser } = useUserContext();
  const [error, setError] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const handelSubmitForm = async ({
    email,
    password,
    remember_me,
  }: ILoginFieldValues) => {
    await API_USERS_LOGIN({ email, password })
      .then(({ data }) => {
        http.setAuthHeader(data.access_token, data.refresh_token);
        if (remember_me) {
          localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, data.refresh_token);
        }
        if (
          email === import.meta.env.VITE_SUPER_USER_EMAIL &&
          password === import.meta.env.VITE_SUPER_USER_PASSWORD
        ) {
          // user login as first time
          setUser(data);
          onChangeStep(ELoginStep.CHANGE_PASSWORD);
        } else if (data.is_authenticated) {
          // user is authenticated
          if (!data.device_serial) {
            // user not have device serial
            onChangeStep(ELoginStep.REGISTER_SERIAL_DEVICE);
          } else {
            // login is ok
            getProfile();
          }
        } else {
          setUser(data);
          onChangeStep(ELoginStep.AUTHENTICATION);
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col items-center w-full mt-auto"
    >
      <div className="absolute top-[-6rem]">
        <Avatar icon="ph:user" intent="grey" size="lg" />
      </div>
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
          rules={{
            required: regexPattern.required,
            // pattern: regexPattern.email,
          }}
          id="email"
          name="email"
          endIcon="ph:user"
        />
        <PasswordInput
          name="password"
          control={control}
          placeholder="password"
        />
        <BaseCheckBox
          control={control}
          label="مرا به خاطر بسپار"
          id="remember_me"
          name="remember_me"
          className="ml-auto"
        />

        <BaseButton
          onClick={() => {}}
          label="ورود به حساب کاربری"
          endIcon="ic:round-login"
          className="mt-8"
          size="md"
          submit
          fullWidth
        />
        <Link to={ROUTES_PATH.resetPassword}>
          <Typography color="teal" className="mt-2">
            رمز خود را فراموش کرده اید؟
          </Typography>
        </Link>
      </div>
    </form>
  );
}
