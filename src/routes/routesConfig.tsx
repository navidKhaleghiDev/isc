import PrivateLayout from '@src/components/Templates/layouts/PrivateLayout';
import { HomePage } from '@src/pages/Home';
import { LoginPage } from '@src/pages/Login';
import { ResetPasswordPage } from '@src/pages/ResetPassword';
import { DashboardPage } from '@src/pages/Dashboard';
import { ProductsPage } from '@src/pages/Services/Products';
import { MonitoringSystemsPage } from '@src/pages/MonitoringSystems';
import { RulesPage } from '@src/pages/Services/Rules';
import { RuleDetailsPage } from '@src/pages/Services/Rules/RuleDetailsPage';
import { MyProductPage } from '@src/pages/MyProduct/MyProduct';
// import { ProductNamePage } from '@src/pages/MyProduct/MyProduct/ProductName';
import { MyProductMyRulesPage } from '@src/pages/MyProduct/MyRules';
// import { MyProductMyRulesNamePage } from '@src/pages/MyProduct/MyRules/RulesName';
import { UiPage } from '@src/pages/Ui';
import NotFoundPage from '@src/pages/NotFound';
import { AboutUsPage } from '@src/pages/AboutUs';
import { ContactUsPage } from '@src/pages/ContactUs';
import { BlogPage } from '@src/pages/Blog';
import { OurServicesPage } from '@src/pages/OurServices';
import { SettingsPage } from '@src/pages/Settings';
import { SupportPage } from '@src/pages/Support';
import { ProfilePage } from '@src/pages/Profile';
import { AddUserPage } from '@src/pages/Users/AddUser';
import UnauthorizedPage from '@src/pages/Unauthorized';
import { IpsListPage } from '@src/pages/MyProduct/IpsList';
import { MyRuleDetailsPage } from '@src/pages/MyProduct/MyRules/MyRuleDetailsPage';
import Layout from '@ui/Templates/layouts/Layout';
import { UsersPage } from '@src/pages/Users';
import { ROUTES_PATH } from './routesConstants';

const routesConfig = [
  {
    path: ROUTES_PATH.ui,
    element: <UiPage />,
  },
  {
    path: ROUTES_PATH.aboutUs,
    element: <AboutUsPage />,
  },
  {
    path: ROUTES_PATH.contactUs,
    element: <ContactUsPage />,
  },
  {
    path: ROUTES_PATH.blog,
    element: <BlogPage />,
  },
  {
    path: ROUTES_PATH.ourServices,
    element: <OurServicesPage />,
  },
  {
    path: ROUTES_PATH.unauthorized,
    element: <UnauthorizedPage />,
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
    path: ROUTES_PATH.resetPassword,
    element: <ResetPasswordPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    element: <PrivateLayout />,
    children: [
      {
        path: ROUTES_PATH.profile,
        element: <ProfilePage />,
      },
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
        path: ROUTES_PATH.monitoringSystems,
        element: <MonitoringSystemsPage />,
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
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/test',
        element: <div>test</div>,
      },
    ],
  },
];

export default routesConfig;
