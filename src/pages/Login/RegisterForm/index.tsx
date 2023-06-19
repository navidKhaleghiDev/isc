import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_USERS_SERVER_AUTH } from '@src/services/client/users';
import { toast } from 'react-toastify';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@context/user/userContext';
import { Modal } from '@ui/molecules/Modal';

import { ILoginFieldValues } from '../types';
import { UpdateSerialDevice } from '../LoginForm/UpdateSerialDevice';

export function RegisterForm() {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const [openModalAssignSerial, setOpenModalAssignSerial] = useState(false);
  const { user, setUser } = useUserContext();

  const [error, setError] = useState<string | null>(null);

  // const handelSubmitForm = async (data: ILoginFieldValues) => {
  //   onChangeStep(ELoginStep.LOGIN);
  //   // navigate(ROUTES_PATH.dashboard);
  // };
  const handelSubmitForm = async ({ email, password }: ILoginFieldValues) => {
    await API_USERS_SERVER_AUTH({ email, password })
      .then(() => {
        if (!user?.device_serial) {
          // user not have device serial

          setOpenModalAssignSerial(true);
        } else {
          // login is ok

          toast.success('ورود با موفقیت انجام شد.');
          navigate(ROUTES_PATH.dashboard);
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  const handleOnSuccessAddSerial = (serial: string) => {
    if (user) {
      const newUser = { ...user, device_serial: serial };
      toast.success('سریال با موفقیت ثبت شد');
      setUser(newUser);
      navigate(ROUTES_PATH.dashboard);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col w-full items-center"
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
      <Modal
        open={openModalAssignSerial}
        setOpen={setOpenModalAssignSerial}
        type="none"
        classContainer="border border-teal-600"
        content={
          <UpdateSerialDevice
            onCloseModal={() => setOpenModalAssignSerial(false)}
            onSuccessAdd={handleOnSuccessAddSerial}
          />
        }
      />
    </>
  );
}
