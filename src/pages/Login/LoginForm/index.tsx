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
import { Modal } from '@ui/molecules/Modal';
import { IUser } from '@src/services/client/users/types';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';
import { UpdateSerialDevice } from './UpdateSerialDevice';

export const STORAGE_KEY_REFRESH_TOKEN = 'refresh';

export function LoginForm({ onChangeStep }: PropsFormType) {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [userState, setUserState] = useState<IUser | null>(null);

  const [error, setError] = useState<string | null>(null);

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

  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSetUserRedux = (dataUser: IUser) => {
    setUser(dataUser ?? userState);
    toast.success('ورود با موفقیت انجام شد.');
  };

  const handleSuccessAddSerial = (serial: string) => {
    console.log({ serial });

    if (userState) {
      const newUser = { ...userState, device_serial: serial };
      handleSetUserRedux(newUser);
    }
  };

  const handelSubmitForm = async ({
    email,
    password,
    remember_me,
  }: ILoginFieldValues) => {
    await API_USERS_LOGIN({ email, password })
      .then(({ data }) => {
        if (remember_me) {
          localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, data.refresh_token);
        }

        setUserState(data);
        http.setAuthHeader(data.access_token, data.refresh_token);
        if (
          email === import.meta.env.VITE_SUPER_USER_EMAIL &&
          password === import.meta.env.VITE_SUPER_USER_PASSWORD
        ) {
          // user login as first time
          handleSetUserRedux(data);

          onChangeStep(ELoginStep.CHANGE_PASSWORD);
        } else if (data.is_authenticated) {
          // user is authenticated

          if (!data.device_serial) {
            // user not have device serial

            handleToggleModal();
          } else {
            // login is ok

            handleSetUserRedux(data);
          }
        } else {
          onChangeStep(ELoginStep.REGISTER);
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  return (
    <>
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
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        type="none"
        classContainer="border border-teal-600"
        content={
          <UpdateSerialDevice
            onCloseModal={handleToggleModal}
            onSuccessAdd={handleSuccessAddSerial}
          />
        }
      />
    </>
  );
}
