import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Modal } from '@ui/molecules/Modal';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';

import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export function ChangePasswordForm({ onChangeStep }: PropsFormType) {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const { user } = useUserContext();

  const handelSubmitForm = async ({ email, password }: ILoginFieldValues) => {
    if (!user) {
      onChangeStep(ELoginStep.LOGIN);
      return;
    }
    await API_USERS_PATCH(user.id, {
      email,
      password,
    })
      .then(({ data }) => {
        if (data.is_authenticated) {
          toast.success('ورود با موفقیت انجام شد.');
          navigate(ROUTES_PATH.dashboard);
        } else {
          // show modal for register
          onChangeStep(ELoginStep.REGISTER);
        }
      })
      .catch((err) => {
        setError(err.data.error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handelSubmitForm)}
        className="flex flex-col w-full items-center"
      >
        <div className="absolute top-[-6rem]">
          <Avatar icon="ph:lock" intent="grey" size="lg" />
        </div>
        <Typography color="neutral" size="h5" className="mb-10">
          لطفا ایمیل و گذرواژه جدید خود را وارد کنید
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
            placeholder="ایمیل"
            id="email"
            name="email"
            type="text"
            endIcon="ph:user"
            rules={{
              required: regexPattern.required,
            }}
          />

          <BaseInput
            fullWidth
            control={control}
            placeholder="گذرواژه جدید"
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
            label="ارسال"
            endIcon="ic:send"
            className="mt-8"
            size="md"
            submit
            fullWidth
          />
        </div>
      </form>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title="اکانت شما احراز هویت نشده است!!"
        description="بدون احراز هویت برخی خدمات برای شما نمایش داده نخواهد شد."
        type="error"
        buttonOne={{
          label: 'برو به داشبورد',
          onClick: () => navigate(ROUTES_PATH.dashboard),
          color: 'red',
        }}
        buttonTow={{
          label: 'احراز هویت',
          onClick: () => onChangeStep(ELoginStep.REGISTER),
        }}
      />
    </div>
  );
}
