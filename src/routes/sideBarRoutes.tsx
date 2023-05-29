import { Icon } from '@iconify/react';

import { ROUTES_PATH } from './routesConstants';

export const sideBarRouter = [
  {
    id: ROUTES_PATH.dashboard,
    permissions: null,
    icon: <Icon icon="ic:round-warning-amber" />,
    title: 'generalStr.dashboard',
    path: ROUTES_PATH.dashboard,
  },
];
