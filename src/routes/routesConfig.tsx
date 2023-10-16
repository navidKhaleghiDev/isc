import PrivateLayout from '@src/components/Templates/layouts/PrivateLayout';
import { LoginPage } from '@src/pages/Login';
import { DashboardPage } from '@src/pages/Dashboard';
import { ProductsPage } from '@src/pages/Services/Products';
import { MonitoringSystemsOnePage } from '@src/pages/MonitoringSystemsOne';
import { MonitoringSystemsTowPage } from '@src/pages/MonitoringSystemsTow';
import { RulesPage } from '@src/pages/Services/Rules';
import { RuleDetailsPage } from '@src/pages/Services/Rules/RuleDetailsPage';
import { MyProductPage } from '@src/pages/MyProduct/MyProduct';
import { MyProductMyRulesPage } from '@src/pages/MyProduct/MyRules';
import NotFoundPage from '@src/pages/NotFound';
import { SettingsPage } from '@src/pages/Settings';
import { SupportPage } from '@src/pages/Support';
import { AddUserPage } from '@src/pages/Users/AddUser';
import UnauthorizedPage from '@src/pages/Unauthorized';
import { IpsListPage } from '@src/pages/MyProduct/IpsList';
import { MyRuleDetailsPage } from '@src/pages/MyProduct/MyRules/MyRuleDetailsPage';
import { UsersPage } from '@src/pages/Users';
import { AiListenerPage } from '@src/pages/AiListenerPage';
import { AiLearnerPage } from '@src/pages/AiLearnerPage';
import DefaultLayout from '@ui/Templates/layouts/DefaultLayout';
import { AiLearnerDetailsPage } from '@src/pages/AiLearnerDetailsPage';
import { AiDetectorPage } from '@src/pages/AiDetectorPage';
import { AiDetectorDetailsPage } from '@src/pages/AiDetectorDetailsPage';

import { ROUTES_PATH } from './routesConstants';

const routesConfig = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES_PATH.unauthorized,
        element: <UnauthorizedPage />,
      },
      {
        path: ROUTES_PATH.home,
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES_PATH.addUser,
        element: <AddUserPage />,
      },
      {
        path: ROUTES_PATH.users,
        element: <UsersPage />,
      },
      {
        path: ROUTES_PATH.dashboard,
        element: <DashboardPage />,
      },
      {
        path: ROUTES_PATH.support,
        element: <SupportPage />,
      },
      {
        path: ROUTES_PATH.ai,
        element: <AiListenerPage />,
      },
      {
        path: ROUTES_PATH.settings,
        element: <SettingsPage />,
      },
      {
        path: ROUTES_PATH.servicesProducts,
        element: <ProductsPage />,
      },
      {
        path: ROUTES_PATH.services,
        element: <ProductsPage />,
      },
      {
        path: ROUTES_PATH.servicesRules,
        element: <RulesPage />,
      },
      {
        path: ROUTES_PATH.servicesRulesRetrieve,
        element: <RuleDetailsPage />,
      },
      {
        path: ROUTES_PATH.monitoringSystemsOne,
        element: <MonitoringSystemsOnePage />,
      },
      {
        path: ROUTES_PATH.monitoringSystemsTow,
        element: <MonitoringSystemsTowPage />,
      },
      {
        path: ROUTES_PATH.myProduct,
        element: <MyProductPage />,
      },
      {
        path: ROUTES_PATH.myProductIpsList,
        element: <IpsListPage />,
      },
      {
        path: ROUTES_PATH.myProductMyRules,
        element: <MyProductMyRulesPage />,
      },
      {
        path: ROUTES_PATH.myProductMyRulesRetrieve,
        element: <MyRuleDetailsPage />,
      },
      {
        path: ROUTES_PATH.myProductAiListener,
        element: <AiListenerPage />,
      },
      {
        path: ROUTES_PATH.myProductAiLearner,
        element: <AiLearnerPage />,
      },
      {
        path: `${ROUTES_PATH.myProductAiLearner}/:id`,
        element: <AiLearnerDetailsPage />,
      },
      {
        path: ROUTES_PATH.myProductAiDetector,
        element: <AiDetectorPage />,
      },
      {
        path: `${ROUTES_PATH.myProductAiDetector}/:id`,
        element: <AiDetectorDetailsPage />,
      },
    ],
  },
];

export default routesConfig;
