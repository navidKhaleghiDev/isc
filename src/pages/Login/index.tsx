import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@ui/atoms/Card';
import { BaseInput, regexPattern } from '@ui/atoms/Inputs';
import { Typography } from '@ui/atoms/Typography';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { ILoginFieldValues } from './types';

export function LoginPage() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<ILoginFieldValues>({
    mode: 'onChange',
  });

  const [error, setError] = useState<boolean>(false);

  const handelSubmitForm = async (data: ILoginFieldValues) => {
    navigate(ROUTES_PATH.dashboard);
  };

  return (
    <div className="font-on bg-teal-600  flex flex-col items-center justify-center min-h-screen">
      <Card className="relative p-10 w-[29.375rem] h-[33rem] flex flex-col items-center justify-end ">
        <form
          onSubmit={handleSubmit(handelSubmitForm)}
          className="flex flex-col w-full items-center"
        >
          <div className="absolute top-[-6rem]">
            <Avatar icon="ph:user" intent="grey" size="lg" />
          </div>
          {error && (
            <Typography color="red" size="body3" className="mb-10">
              حساب کاربری یا ایمیل وارد شده وجود ندارد.
            </Typography>
          )}
          <div className="w-full flex flex-col items-center justify-end pb-16">
            <BaseInput
              fullWidth
              control={control}
              placeholder="email"
              rules={{
                required: regexPattern.required,
                pattern: regexPattern.email,
              }}
              id="email"
              name="email"
              endIcon="ph:user"
            />
            <BaseInput
              fullWidth
              control={control}
              placeholder="password"
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
              label="ورود به حساب کاربری"
              endIcon="ic:round-login"
              className="mt-8"
              size="md"
              submit
              fullWidth
            />
            <Link to={ROUTES_PATH['reset-password']}>
              <Typography color="teal" className="mt-2">
                رمز خود را فراموش کرده اید؟
              </Typography>
            </Link>
          </div>
        </form>
      </Card>
      <Link to={ROUTES_PATH.home}>
        <BaseButton
          label="خانه"
          endIcon="ic:round-login"
          className="mt-10"
          size="md"
          type="outline"
        />
      </Link>
    </div>
  );
}
