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
import { LoadingPage } from '@ui/molecules/Loading';

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
  const [loading, setLoading] = useState(false);

  const { setUser, user } = useUserContext();
  const navigate = useNavigate();
  const Step = loginSteps[step];

  const getProfile = async () => {
    setLoading(true);
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

  if (loading) {
    return <LoadingPage description="لطفا شکیبا باشید" />;
  }
  return (
    <div className="flex w-full h-screen">
      <div className="bg-cover bg-center h-1/2 md:h-full md:w-1/2 md:bg-[url('Login.png')] md:rounded-l-3xl" />
      <div className="font-kalameh font-normal w-full md:w-1/2 flex flex-col items-center justify-center p-4">
        <Card className="relative flex flex-col items-center w-full max-w-md">
          <Step onChangeStep={setStep} getProfile={getProfile} />
        </Card>
        {user && (
          <Link to={ROUTES_PATH.dashboard}>
            <BaseButton
              label="داشبورد"
              endIcon="ic:round-login"
              className="mt-10"
              size="md"
              type="shadow"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

const LoginPage = withNoAuth(LoginPageCp);
export { LoginPage };
