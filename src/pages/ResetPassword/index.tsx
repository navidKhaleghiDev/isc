import { BaseButton } from '@ui/atoms/BaseButton';
import { Card } from '@ui/atoms/Card';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { PasswordStrength } from '@ui/atoms/Inputs/PasswordInput/passwordStrength';
import { ILoginFieldValues } from './types';

export function ResetPasswordPage() {
  const { control, handleSubmit, watch } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error] = useState<boolean>(false);

  const handelSubmitForm = async (data: ILoginFieldValues) => {
    console.log({ data });
  };

  return (
    <div className="font-on bg-teal-600 flex flex-col items-center justify-center min-h-screen">
      <Card className="p-10 w-[29.375rem] h-[33rem] flex flex-col items-center justify-center ">
        <form
          onSubmit={handleSubmit(handelSubmitForm)}
          className="flex flex-col w-full items-center"
        >
          <Typography className="mb-10" size="h4" weight="bold">
            رمز عبور جدید
          </Typography>
          {error && (
            <Typography color="red" size="body3" className="mb-10">
              حساب کاربری یا ایمیل وارد شده وجود ندارد.
            </Typography>
          )}
          <div className="w-full flex flex-col items-center justify-end pb-16">
            <PasswordInput
              name="password"
              control={control}
              placeholder="گذرواژه فعلی"
            />

            <PasswordInput
              name="password-r"
              control={control}
              placeholder="تکرار گذرواژه فعلی"
            />
            <PasswordStrength password={watch('password')} />
            <BaseButton
              onClick={() => {}}
              label="ذخیره تغییرات"
              className="mt-8"
              size="md"
              submit
              fullWidth
            />
          </div>
        </form>
      </Card>
    </div>
  );
}
