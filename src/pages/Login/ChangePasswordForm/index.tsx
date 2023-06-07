import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ELoginStep, ILoginFieldValues, PropsFormType } from '../types';

export function ChangePasswordForm({ onChangeStep }: PropsFormType) {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error] = useState<boolean>(false);

  const handelSubmitForm = async (_data: ILoginFieldValues) => {
    onChangeStep(ELoginStep.REGISTER);
    // navigate(ROUTES_PATH.dashboard);
  };

  return (
    <form
      onSubmit={handleSubmit(handelSubmitForm)}
      className="flex flex-col w-full items-center"
    >
      <div className="absolute top-[-6rem]">
        <Avatar icon="ph:lock" intent="grey" size="lg" />
      </div>
      <Typography color="neutral" size="h4" className="mb-10">
        لطفا گذرواژه خود را تغییر دهید
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
          placeholder="گذرواژه جدید"
          id="password"
          name="password"
          type="password"
          endIcon="carbon:password"
          rules={{
            required: regexPattern.required,
          }}
        />

        <BaseInput
          fullWidth
          control={control}
          placeholder="تکرار گذرواژه جدید"
          id="password-r"
          name="password-r"
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
  );
}
