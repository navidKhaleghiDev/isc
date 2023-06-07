import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export function RegisterForm({ onChangeStep }: PropsFormType) {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error, setError] = useState<boolean>(false);

  const handelSubmitForm = async (data: ILoginFieldValues) => {
    onChangeStep(ELoginStep.LOGIN);
    // navigate(ROUTES_PATH.dashboard);
  };

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col w-full items-center"
    >
      <div className="absolute top-[-6rem]">
        <Avatar icon="mdi:register-outline" intent="grey" size="lg" />
      </div>
      <Typography color="neutral" size="h4" className="mb-10">
        ثبت کاربر ادمین
      </Typography>
      {error && (
        <Typography color="red" size="body3" className="mb-10">
          حساب کاربری یا ایمیل وارد شده وجود ندارد.
        </Typography>
      )}

      <div className="w-full flex flex-col items-center justify-end pb-16">
        <BaseInput
          fullWidth
          control={control}
          placeholder="نام کاربری"
          id="username"
          name="username"
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
          endIcon="ic:send"
          className="mt-8"
          size="md"
          submit
          fullWidth
        />
      </div>
    </form>
  );
}
