import { useState, useRef } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import { Typography } from '@ui/atoms/Typography/Typography';
import { IconButton } from '@ui/atoms/BaseButton';
import { PageBackButton } from '@ui/atoms/BackButton';
import PhUser from '@iconify-icons/ph/user';
import PhHardDrives from '@iconify-icons/ph/hard-drives';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useClickOutside } from '@src/helper/hooks/useClickOutside';
import { StatusDropdown } from '../Status/StatusDropdown';

const serverOptions = [
  { id: 'server1', label: 'Server 1', icon: PhHardDrives, status: 'expired' },
  { id: 'server2', label: 'Server 2', icon: PhHardDrives, status: 'disable' },
  { id: 'server3', label: 'Server 3', icon: PhHardDrives, status: 'active' },
  { id: 'server4', label: 'Server 4', icon: PhHardDrives, status: 'active' },
];

export function NavbarDashboard(): JSX.Element {
  const [statusOpen, setStatusOpen] = useState(false);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const location = useLocation();
  const statusRef = useRef(null);
  const userMenuRef = useRef(null);

  const statusHandle = () => {
    setStatusOpen(!statusOpen);
    if (statusMenuOpen) setStatusMenuOpen(false);
  };

  useClickOutside({
    ref: statusRef,
    setValue: () => setStatusOpen(false),
    value: statusOpen,
  });

  const backButtonRoutes = [
    ROUTES_PATH.addUser,
    ROUTES_PATH.settings,
    ROUTES_PATH.myProductMyRules,
    ROUTES_PATH.myProductIpsList,
    ROUTES_PATH.servicesRulesRetrieve,
    ROUTES_PATH.myProductMyRulesRetrieve,
  ];

  const shouldShowBackButton = (pathname: string) => {
    return backButtonRoutes.some((route) => matchPath(route, pathname));
  };

  const showBackButton = shouldShowBackButton(location.pathname);

  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto relative">
      <Link to={ROUTES_PATH.home} className="hidden sm:flex">
        <Typography
          color="teal"
          size="h5"
          className="text-xl sm:text-2xl"
          weight="bold"
        >
          NETFENCE
        </Typography>
      </Link>
      <div>
        {!showBackButton ? (
          <Link to={ROUTES_PATH.home}>
            <Typography
              color="teal"
              size="h5"
              className="flex sm:hidden text-xl sm:text-2xl"
              weight="bold"
            >
              NETFENCE
            </Typography>
          </Link>
        ) : (
          <div className="flex justify-center items-center sm:hidden">
            <PageBackButton backToReferrer />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center relative">
        <div ref={statusRef} className="relative">
          <IconButton
            size="xxl"
            type="button"
            color="neutralLight"
            icon={PhHardDrives}
            onClick={statusHandle}
            className={`w-10 h-10 rounded-lg ml-2 hover:bg-neutral-300 transition-all duration-700 ease-linear ${
              statusOpen ? 'bg-neutral-300 hover:bg-neutral-300' : ''
            }`}
          />
          <StatusDropdown
            options={serverOptions}
            isOpen={statusOpen}
            toggleDropdown={setStatusOpen}
          />
        </div>

        <div ref={userMenuRef} className="relative">
          <IconButton
            size="xxl"
            type="button"
            color="neutralLight"
            icon={PhUser}
            className="w-10 h-10 rounded-lg hover:bg-neutral-300 transition-all duration-700 ease-linear"
          />
        </div>
      </div>
    </div>
  );
}
