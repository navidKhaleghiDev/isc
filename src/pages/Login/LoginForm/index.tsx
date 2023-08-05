import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { useNavigate } from 'react-router-dom';
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
import { Modal } from '@ui/molecules/Modal';
import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export const STORAGE_KEY_REFRESH_TOKEN = 'refresh';

export function LoginForm({ onChangeStep, getProfile }: PropsFormType) {
  const { setUser } = useUserContext();
  const [error, setError] = useState<string | null>(null);
  const [loadingButton, setLoadingButton] = useState(false);

  const [openModalSerialDevice, setOpenModalSerialDevice] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const handelSubmitForm = async ({
    email,
    password,
    remember_me,
  }: ILoginFieldValues) => {
    setLoadingButton(true);
    await API_USERS_LOGIN({ email, password })
      .then(({ data }) => {
        http.setAuthHeader(data.access_token, data.refresh_token);
        setUser(data);
        if (remember_me) {
          localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, data.refresh_token);
        }
        if (data.force_change) {
          // user login as first time
          onChangeStep(ELoginStep.CHANGE_PASSWORD);
        } else if (data.is_authenticated) {
          // user is authenticated
          if (!data.device_serial) {
            // user not have device serial
            if (data.is_admin || data.is_superuser) {
              onChangeStep(ELoginStep.REGISTER_SERIAL_DEVICE);
            } else {
              getProfile();
            }
          } else {
            // login is ok
            getProfile();
          }
        } else {
          onChangeStep(ELoginStep.AUTHENTICATION);
        }
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col items-center w-full mt-auto"
      >
        <div className="absolute top-[-6rem]">
          <Avatar icon="ph:user" intent="grey" size="lg" />
        </div>
        <Typography color="neutral" size="h5" className="mb-5">
          لطفا ایمیل و گذرواژه خود را وارد کنید
        </Typography>
        {error && (
          <Typography color="red" size="body3" className="mb-2">
            {error}
          </Typography>
        )}
        <div className="w-full flex flex-col items-center justify-end">
          <BaseInput
            fullWidth
            control={control}
            placeholder="email"
            rules={{
              required: regexPattern.required,
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
            label="ورود به حساب کاربری"
            endIcon="ic:round-login"
            className="mt-8"
            loading={loadingButton}
            size="md"
            submit
            fullWidth
          />
        </div>
      </form>
      <Modal
        open={openModalSerialDevice}
        setOpen={setOpenModalSerialDevice}
        title=" شماره سریال دستگاه وارد نشده است!!"
        description="بدون ثبت شماره سریال برخی خدمات برای شما نمایش داده نخواهد شد."
        type="error"
        buttonOne={{
          label: 'برو به داشبورد',
          onClick: () => navigate(ROUTES_PATH.dashboard),
          color: 'red',
        }}
        buttonTow={{
          label: 'ثبت شماره سریال',
          onClick: () => onChangeStep(ELoginStep.AUTHENTICATION),
        }}
      />
    </>
  );
}
