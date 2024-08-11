import PhMonitor from '@iconify-icons/ph/monitor';
import PhDeviceTabletCamera from '@iconify-icons/ph/device-tablet-camera';
import PhArticle from '@iconify-icons/ph/article';
import PhHouseSimple from '@iconify-icons/ph/house-simple';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { INavigation } from './types';

export const navigationSideBar: INavigation[] = [
  {
    id: '1',
    label: 'داشبورد',
    path: ROUTES_PATH.dashboard,
    icon: PhHouseSimple,
  },

  {
    id: '2',
    label: 'لیست قوانین',
    path: ROUTES_PATH.servicesRules,
    icon: PhArticle,
  },

  {
    id: '3',
    label: 'محصول من',
    path: ROUTES_PATH.myProduct,
    icon: PhDeviceTabletCamera,
  },
  {
    id: '4',
    label: 'سیستم نظارتی امنیتی',
    path: ROUTES_PATH.monitoringSystems,
    icon: PhMonitor,
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
];
