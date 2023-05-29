import { ROUTES_PATH } from '@src/routes/routesConstants';

export interface INavigation {
  id: string;
  label: string;
  path: string;
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
    label: 'محصول',
    path: ROUTES_PATH.dashboard,
    icon: 'fluent-mdl2:product',
    items: [
      {
        id: '1',
        label: '1محصول',
        path: ROUTES_PATH.dashboard,
      },
      {
        id: '2',
        label: '2محصول',
        path: ROUTES_PATH.dashboard,
      },
    ],
  },
  {
    id: '3',
    label: 'کاربران',
    path: ROUTES_PATH.dashboard,
    icon: 'clarity:users-line',
  },
  {
    id: '4',
    label: 'قوانین',
    path: ROUTES_PATH.dashboard,
    icon: 'eos-icons:cluster-role',
  },
  {
    id: '5',
    label: 'پشتیبانی',
    path: ROUTES_PATH.dashboard,
    icon: 'bx:support',
    items: [
      {
        id: '1',
        label: '1پشتیبانی',
        path: ROUTES_PATH.dashboard,
      },
      {
        id: '2',
        label: 'پشتیبانی2',
        path: ROUTES_PATH.dashboard,
      },
    ],
  },
  {
    id: '6',
    label: 'تنظیمات',
    path: ROUTES_PATH.dashboard,
    icon: 'uil:setting',
  },
];
