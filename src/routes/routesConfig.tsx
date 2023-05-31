import PrivateLayout from '@src/components/Templates/layouts/PrivateLayout';
import { HomePage } from '@src/pages/Home';
import { LoginPage } from '@src/pages/Login';
import { ResetPasswordPage } from '@src/pages/ResetPassword';
import { DashboardPage } from '@src/pages/Dashboard';
import { ProductPage } from '@src/pages/Services/Product';
import { MyRulesPage } from '@src/pages/MyRules';
import { MonitoringSystemsPage } from '@src/pages/MonitoringSystems';
import { RulesPage } from '@src/pages/Services/Rules';
import { RulesCodePage } from '@src/pages/Services/RulesCode';

import { UiPage } from '@src/pages/Ui';
import { ROUTES_PATH } from './routesConstants';

const routesConfig = [
  {
    path: ROUTES_PATH.ui,
    element: <UiPage />,
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
      {
        path: ROUTES_PATH.product,
        element: <ProductPage />,
      },
      {
        path: ROUTES_PATH.rules,
        element: <RulesPage />,
      },
      {
        path: ROUTES_PATH['rules-code'],
        element: <RulesCodePage />,
      },
      {
        path: ROUTES_PATH['my-rules'],
        element: <MyRulesPage />,
      },
      {
        path: ROUTES_PATH['monitoring-systems'],
        element: <MonitoringSystemsPage />,
      },
      {
        path: ROUTES_PATH['my-product'],
        element: <ProductPage />,
      },
    ],
  },
];

export default routesConfig;
