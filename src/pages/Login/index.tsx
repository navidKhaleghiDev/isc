import { useState } from 'react';
import { toast } from 'react-toastify';
import { BaseButton } from '@ui/atoms/BaseButton';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@ui/atoms/Card';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_USERS_PROFILE } from '@src/services/client/users';
import { useUserContext } from '@context/user/userContext';
import { http } from '@src/services/http';
import { withNoAuth } from '@src/helper/hoc/withNoAuth';

import { LoginForm } from './LoginForm';
import { AuthenticationForm } from './AuthenticationForm';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ELoginStep } from './types';
import { RegisterSerialDeviceForm } from './RegisterSerialDeviceForm';

const loginSteps = {
  login: LoginForm,
  changePassword: ChangePasswordForm,
  authentication: AuthenticationForm,
  resisterSerialDevice: RegisterSerialDeviceForm,
};

function LoginPageCp() {
  const [step, setStep] = useState<ELoginStep>(ELoginStep.LOGIN);
  const { setUser, user } = useUserContext();
  const navigate = useNavigate();
  const Step = loginSteps[step];

  const getProfile = async () => {
    await API_USERS_PROFILE()
      .then(({ data }) => {
        setUser(data);
        navigate(ROUTES_PATH.dashboard);
        toast.success('ورود با موفقیت انجام شد.');
      })
      .catch(() => {
        http.removeAuthHeader();
        navigate(ROUTES_PATH.login);
      });
  };

  return (
    <div className="font-on bg-teal-600  flex flex-col items-center justify-center min-h-screen ">
      <Card className="relative p-10 w-[29.375rem] h-[33rem] flex flex-col items-center">
        <Step onChangeStep={setStep} getProfile={getProfile} />
      </Card>
      <Link to={user ? ROUTES_PATH.dashboard : ROUTES_PATH.home}>
        <BaseButton
          label={user ? 'داشبورد' : 'خانه'}
          endIcon="ic:round-login"
          className="mt-10"
          size="md"
          type="shadow"
        />
      </Link>
    </div>
  );
}

const LoginPage = withNoAuth(LoginPageCp);
export { LoginPage };
