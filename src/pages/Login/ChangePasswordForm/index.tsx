import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Modal } from '@ui/molecules/Modal';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';

import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

type ChangePasswordValues = {
  email: string;
  password: string;
  password_r: string;
};

export function ChangePasswordForm({
  onChangeStep,
  getProfile,
}: PropsFormType) {
  const { control, handleSubmit } = useForm<ChangePasswordValues>({
    mode: 'onChange',
  });
  const [error, setError] = useState<string | null>(null);
  const [openModalAuth, setOpenModalAuth] = useState(false);
  const { user } = useUserContext();

  const handelSubmitForm = async ({ email, password }: ILoginFieldValues) => {
    if (!user) {
      onChangeStep(ELoginStep.LOGIN);
      return;
    }
    await API_USERS_PATCH(user?.id as string, {
      email,
      password,
    })
      .then(({ data }) => {
        if (user?.is_authenticated) {
          // user is authenticated
          if (!data.device_serial) {
            // user not have device serial
            onChangeStep(ELoginStep.REGISTER_SERIAL_DEVICE);
          } else {
            // login is ok
            getProfile();
          }
        } else {
          setOpenModalAuth(true);
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="w-full h-full flex flex-col items-center justify-end mt-auto"
      >
        <div className="absolute top-[-6rem]">
          <Avatar icon="ph:lock" intent="grey" size="lg" />
        </div>
        <Typography color="neutral" size="h5" className="mb-5">
          لطفا ایمیل و گذرواژه جدید خود را وارد کنید
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
            placeholder="گذرواژه جدید"
          />
          <PasswordInput
            name="password_r"
            control={control}
            placeholder="تکرار گذرواژه جدید"
          />

          <BaseButton
            label="ارسال"
            endIcon="ic:send"
            className="mt-8"
            size="md"
            submit
            fullWidth
          />
        </div>
        <Typography color="red" size="body6" className="my-2">
          ⚠️ در صورت فراموشی اطلاعات قابلیت بازیابی ایمیل و گذرواژه وجود ندارد.
        </Typography>
      </form>

      <Modal
        size="md"
        open={openModalAuth}
        setOpen={setOpenModalAuth}
        size="md"
        title="اکانت شما احراز هویت نشده است!!"
        description="بدون احراز هویت برخی خدمات برای شما نمایش داده نخواهد شد."
        type="error"
        buttonOne={{
          label: 'برو به داشبورد',
          onClick: () => getProfile(),
          color: 'red',
        }}
        buttonTow={{
          label: 'احراز هویت',
          onClick: () => onChangeStep(ELoginStep.AUTHENTICATION),
        }}
      />
    </>
  );
}
