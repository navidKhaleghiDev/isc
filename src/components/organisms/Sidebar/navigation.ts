import { RoutePathType, ROUTES_PATH } from '@src/routes/routesConstants';

export interface INavigation {
  id: string;
  label: string;
  path: RoutePathType | string;
  icon?: string;
  items?: INavigation[];
}
export const navigationSideBar: INavigation[] = [
  {
    id: '1',
    label: 'داشبورد',
    path: ROUTES_PATH.dashboard,
    icon: 'radix-icons:dashboard',
  },
  {
    id: '2',
    label: 'خدمات ',
    path: ROUTES_PATH.services,
    icon: 'radix-icons:dashboard',
    items: [
      {
        id: '1',
        label: 'محصولات',
        path: ROUTES_PATH.servicesProducts,
      },
      {
        id: '2',
        label: 'قوانین',
        path: ROUTES_PATH.servicesRules,
      },
      {
        id: '3',
        label: 'سیستم نظارتی امنیتی',
        path: ROUTES_PATH.monitoringSystems,
      },
    ],
  },
  {
    id: '3',
    label: 'محصولات من',
    path: ROUTES_PATH.myProduct,
    icon: 'fluent-mdl2:product',
    items: [
      {
        id: '1',
        label: 'محصولات من',
        path: ROUTES_PATH.myProduct,
      },
      {
        id: '2',
        label: 'قانون های من',
        path: ROUTES_PATH.myProductMyRules,
      },
      {
        id: '3',
        label: 'سیستم نظارتی امنیتی',
        path: ROUTES_PATH.monitoringSystems,
      },
    ],
  },

  {
    id: '4',
    label: 'پشتیبانی',
    path: ROUTES_PATH.support,
    icon: 'bx:support',
  },
  {
    id: '6',
    label: 'تنظیمات',
    path: ROUTES_PATH.settings,
    icon: 'uil:setting',
  },
];
