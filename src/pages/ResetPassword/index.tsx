import { BaseButton } from '@ui/atoms/BaseButton';
import { Card } from '@ui/atoms/Card';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  getPasswordStrength,
  getLabelPasswordStrength,
  EPasswordStrengthColor,
} from '@src/helper/utils/getPasswordStrength';
import { ILoginFieldValues } from './types';

export function ResetPasswordPage() {
  const { control, handleSubmit, watch } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error, setError] = useState<boolean>(false);

  const handelSubmitForm = async (data: ILoginFieldValues) => {
    console.log({ data });
  };
  const passwordStrength = getPasswordStrength(
    watch('password')
  ) as EPasswordStrengthColor;

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
            <BaseInput
              fullWidth
              control={control}
              placeholder="password"
              type="text"
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
            <div className="flex justify-center items-center w-full">
              {passwordStrength && (
                <Typography className="mx-2" color={passwordStrength}>
                  {getLabelPasswordStrength(passwordStrength)}
                </Typography>
              )}
              <div
                className={`h-1 w-full ${
                  passwordStrength === 'teal'
                    ? `bg-${passwordStrength}-500`
                    : `bg-neutral-200`
                } rounded mx-1`}
              />
              <div
                className={`h-1 w-full ${
                  passwordStrength === 'yellow' || passwordStrength === 'teal'
                    ? `bg-${passwordStrength}-500`
                    : `bg-neutral-200`
                } rounded mx-1`}
              />
              <div
                className={`h-1 w-full ${
                  passwordStrength
                    ? `bg-${passwordStrength}-500`
                    : `bg-neutral-200`
                } rounded mx-1`}
              />
            </div>
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
