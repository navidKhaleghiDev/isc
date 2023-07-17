import { ROUTES_PATH } from '@src/routes/routesConstants';
import { RoutePathType } from '@src/routes/types';

export interface INavigation {
  id: string;
  label: string;
  path: RoutePathType | string;
  isNewTab?: boolean;
  icon?: string;
  items?: INavigation[];
}
export const navigationSideBar: INavigation[] = [
  {
    id: '1',
    label: 'داشبورد',
    path: ROUTES_PATH.dashboard,
    icon: 'ph:rows',
  },
  {
    id: '2',
    label: 'خدمات ',
    path: ROUTES_PATH.services,
    icon: 'ph:devices',
    items: [
      {
        id: '1',
        label: 'محصولات',
        path: ROUTES_PATH.servicesProducts,
      },
      {
        id: '2',
        label: 'لیست قوانین',
        path: ROUTES_PATH.servicesRules,
      },
    ],
  },
  {
    id: '3',
    label: 'محصول من',
    path: ROUTES_PATH.myProduct,
    icon: 'ph:user',
  },
  {
    id: '4',
    label: 'سیستم نظارتی امنیتی',
    path: ROUTES_PATH.monitoringSystems,
    icon: 'ph:monitor',
    items: [
      {
        id: '1',
        label: 'سیستم نظارتی اول',
        path: ROUTES_PATH.monitoringSystemsOne,
      },
      {
        id: '2',
        label: 'سیستم نظارتی دوم',
        path: ROUTES_PATH.monitoringSystemsTow,
      },
    ],
  },
  {
    id: '5',
    label: 'تنظیمات',
    path: ROUTES_PATH.settings,
    icon: 'ph:gear',
  },
  {
    id: '6',
    label: 'کاربران ',
    path: ROUTES_PATH.users,
    icon: 'ph:users-three',
    items: [
      {
        id: '1',
        label: 'لیست کاربران',
        path: ROUTES_PATH.users,
      },
      {
        id: '2',
        label: ' اضافه کردن کاربر',
        path: ROUTES_PATH.addUser,
      },
    ],
  },
];
