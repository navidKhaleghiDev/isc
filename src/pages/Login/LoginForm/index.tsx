import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Link, useNavigate } from 'react-router-dom';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_USERS_LOGIN } from '@src/services/client/users';
import { toast } from 'react-toastify';
import { useUserContext } from '@context/user/userContext';
import { http } from '@src/services/http';
import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export function LoginForm({ onChangeStep }: PropsFormType) {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      http.removeAuthHeader();
      navigate(ROUTES_PATH.login);
    } else {
      navigate(ROUTES_PATH.dashboard);
    }
  }, [navigate, user]);

  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });
  const [error, setError] = useState<string | null>(null);

  const handelSubmitForm = async ({ email, password }: ILoginFieldValues) => {
    await API_USERS_LOGIN({ email, password })
      .then(({ data }) => {
        http.setAuthHeader(data.access_token, data.refresh_token);
        setUser(data);
        if (data.is_authenticated) {
          if (
            email === import.meta.env.VITE_SUPER_USER_EMAIL &&
            password === import.meta.env.VITE_SUPER_USER_PASSWORD
          ) {
            // user login as first time
            onChangeStep(ELoginStep.CHANGE_PASSWORD);
            return;
          }

          toast.success('ورود با موفقیت انجام شد.');
          navigate(ROUTES_PATH.dashboard);
        } else {
          onChangeStep(ELoginStep.REGISTER);
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col w-full items-center"
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
        <BaseInput
          fullWidth
          control={control}
          placeholder="password"
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
