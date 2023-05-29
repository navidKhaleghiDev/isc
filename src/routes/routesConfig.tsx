import PrivateLayout from '@src/components/Templates/layouts/PrivateLayout';
import { HomePage } from '@src/pages/Home';
import { LoginPage } from '@src/pages/Login';
import { ResetPasswordPage } from '@src/pages/ResetPassword';
import { DashboardPage } from '@src/pages/Dashboard';
import { ROUTES_PATH } from './routesConstants';

const routesConfig = [
  {
    path: ROUTES_PATH.ui,
    element: <HomePage />,
  },
  {
    path: ROUTES_PATH.error403,
    element: <h1>{`403 | you don't have permission`}</h1>,
  },
  {
    path: ROUTES_PATH.home,
    element: <HomePage />,
  },
  {
    path: ROUTES_PATH.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES_PATH['reset-password'],
    element: <ResetPasswordPage />,
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES_PATH.dashboard,
        element: <DashboardPage />,
      },
    ],
  },
];

export default routesConfig;
