import { ERoutes, ROUTES_PATH } from '@src/routes/routesConstants';

export interface INavigation {
  id: string;
  label: string;
  path: ERoutes | string;
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
        path: ROUTES_PATH.product,
      },
      {
        id: '2',
        label: 'قوانین',
        path: ROUTES_PATH.rules,
      },
      {
        id: '3',
        label: 'سیستم نظارتی امنیتی',
        path: ROUTES_PATH.dashboard,
      },
    ],
  },
  {
    id: '3',
    label: 'محصولات من',
    path: ROUTES_PATH['my-product'],
    icon: 'fluent-mdl2:product',
    items: [
      {
        id: '1',
        label: 'محصولات من',
        path: ROUTES_PATH['my-product'],
      },
      {
        id: '2',
        label: 'قانون های من',
        path: ROUTES_PATH['my-rules'],
      },
      {
        id: '3',
        label: 'سیستم نظارتی امنیتی',
        path: ROUTES_PATH.dashboard,
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
