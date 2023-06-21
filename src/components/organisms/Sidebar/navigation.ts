import { RoutePathType, ROUTES_PATH } from '@src/routes/routesConstants';

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
      {
        id: '3',
        label: 'راهنمای سیستم نظارتی',
        path: ROUTES_PATH.monitoringSystems,
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
        path: 'http://192.168.2.20:5601',
        isNewTab: true,
      },
      {
        id: '2',
        label: 'سیستم نظارتی دوم',
        path: ROUTES_PATH.monitoringSystems,
      },
    ],
  },

  {
    id: '5',
    label: 'سوالات متداول',
    path: ROUTES_PATH.support,
    icon: 'ph:phone',
  },
  {
    id: '6',
    label: 'تنظیمات',
    path: ROUTES_PATH.settings,
    icon: 'ph:gear',
  },
];
