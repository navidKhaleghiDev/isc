import { Avatar } from '@ui/atoms/Avatar';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Card } from '@ui/atoms/Card';
import { BaseInput } from '@ui/atoms/Inputs';
import { useForm } from 'react-hook-form';

export function LoginPage() {
  const { control } = useForm();
  return (
    <div className="bg-sky-600 relative flex items-center justify-center min-h-screen">
      <Card className="w-72 relative">
        <div className="flex flex-col items-center justify-center">
          <div className="absolute top-0">
            <Avatar />
          </div>
          <BaseInput
            control={control}
            placeholder="username"
            id="username"
            name="username"
            startIcon="ph:user"
            fullWidth
          />
          <BaseInput
            control={control}
            placeholder="username"
            id="password"
            name="password"
            startIcon="carbon:password"
            fullWidth
          />
          <BaseButton
            label="ورود به حساب کاربری"
            endIcon="ic:round-login"
            model="form"
          />
        </div>
      </Card>
    </div>
  );
}
