import PrivateLayout from '@src/components/Templates/layouts/PrivateLayout';
import { HomePage } from '@src/pages/Home';
import { LoginPage } from '@src/pages/Login';
import { ResetPasswordPage } from '@src/pages/ResetPassword';
import { DashboardPage } from '@src/pages/Dashboard';
import { ROUTES } from './routesConstants';

const routesConfig = [
  {
    path: `/${ROUTES.ui}`,
    element: <HomePage />,
  },
  {
    path: `/${ROUTES.error403}`,
    element: <h1>{`403 | you don't have permission`}</h1>,
  },
  {
    path: `/${ROUTES.home}`,
    element: <HomePage />,
  },
  {
    path: `/${ROUTES.login}`,
    element: <LoginPage />,
  },
  {
    path: `/${ROUTES.resetPassword}`,
    element: <ResetPasswordPage />,
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: `/${ROUTES.dashboard}`,
        element: <DashboardPage />,
      },
    ],
  },
];

export default routesConfig;
