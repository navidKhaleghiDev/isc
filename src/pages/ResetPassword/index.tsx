import { BaseButton } from '@ui/atoms/BaseButton';
import { Card } from '@ui/atoms/Card';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ILoginFieldValues } from './types';

export function ResetPasswordPage() {
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error, setError] = useState<boolean>(false);

  const handelSubmitForm = async (data: ILoginFieldValues) => {
    console.log({ data });
  };

  return (
    <div className="bg-sky-600  flex flex-col items-center justify-center min-h-screen">
      <Card className="relative p-10 w-[29.375rem] h-[33rem] flex flex-col items-center justify-center ">
        <form
          onSubmit={handleSubmit(handelSubmitForm)}
          className="flex flex-col w-full items-center"
        >
          <Typography size="lg" weight="bold" className="mb-10">
            رمز عبور جدید
          </Typography>
          {error && (
            <Typography color="error" className="mb-10">
              حساب کاربری یا ایمیل وارد شده وجود ندارد.
            </Typography>
          )}
          <div className="w-full flex flex-col items-center justify-end pb-16">
            <BaseInput
              fullWidth
              control={control}
              placeholder="password"
              type="password"
              id="password"
              name="password"
              endIcon="carbon:password"
              rules={{
                required: regexPattern.required,
              }}
            />
            <BaseInput
              fullWidth
              control={control}
              placeholder="password-r"
              type="password"
              id="password-r"
              name="password-r"
              endIcon="carbon:password"
              rules={{
                required: regexPattern.required,
              }}
            />
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
