import { Icon } from '@iconify/react';

import { ROUTES } from './routesConstants';

export const sideBarRouter = [
  {
    id: ROUTES.dashboard,
    permissions: null,
    icon: <Icon icon="ic:round-warning-amber" />,
    title: 'generalStr.dashboard',
    path: `/${ROUTES.dashboard}`,
  },
  {
    id: ROUTES.cartable,
    permissions: null,
    icon: <Icon icon="ic:round-warning-amber" />,
    title: 'generalStr.cartable',
    itemDetails: [
      {
        id: ROUTES.dashboard,
        permissions: null,
        title: 'generalStr.messages',
        path: `/${ROUTES.messages}`,
      },
    ],
  },
  {
    id: ROUTES.usersLogs,
    permissions: null,
    icon: <Icon icon="ic:round-warning-amber" />,
    title: 'generalStr.usersLogs',
    path: `/${ROUTES.usersLogs}`,
  },
];
