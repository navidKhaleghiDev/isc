import { useState } from 'react';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';
import { Card } from '@ui/atoms/Card';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ELoginStep } from './types';

const loginSteps = {
  login: LoginForm,
  changePassword: ChangePasswordForm,
  register: RegisterForm,
};

export function LoginPage() {
  const [step, setStep] = useState<ELoginStep>(ELoginStep.LOGIN);
  const Step = loginSteps[step];

  return (
    <div className="font-on bg-teal-600  flex flex-col items-center justify-center min-h-screen">
      <Card className="relative p-10 w-[29.375rem] h-[33rem] flex flex-col items-center justify-end ">
        <Step onChangeStep={setStep} />
      </Card>
      <Link to={ROUTES_PATH.home}>
        <BaseButton
          label="خانه"
          endIcon="ic:round-login"
          className="mt-10"
          size="md"
          type="shadow"
        />
      </Link>
    </div>
  );
}
