import { Link, matchPath, useLocation } from 'react-router-dom';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Typography } from '@ui/atoms/Typography/Typography';
import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { IconButton } from '@ui/atoms/BaseButton';
import { PageBackButton } from '@ui/atoms/BackButton';
import { ProfileMenu } from '../ProfileMenu';

/**
 * NavbarDashboard Component
 *
 * This component renders the navigation bar for the dashboard. It includes the user's avatar, name,
 * role, and links to various routes based on the user's permissions.
 *
 * @example
 * <NavbarDashboard />
 *
 * @returns {JSX.Element} The rendered NavbarDashboard component.
 */ export function NavbarDashboard(): JSX.Element {
  const location = useLocation();

  const backButtonRoutes = [
    ROUTES_PATH.addUser,
    ROUTES_PATH.settings,
    ROUTES_PATH.myProductMyRules,
    ROUTES_PATH.myProductIpsList,
    ROUTES_PATH.servicesRulesRetrieve,
    ROUTES_PATH.myProductMyRulesRetrieve,
    ROUTES_PATH.changePassword,
  ];
  const shouldShowBackButton = (pathname: string) => {
    return backButtonRoutes.some((route) => matchPath(route, pathname));
  };
  const showBackButton = shouldShowBackButton(location.pathname);
  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto">
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

      <div className="flex justify-center items-center">
        <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhHardDrives}
          className="w-10 h-10 rounded-lg ml-2 hover:bg-neutral-300 transition-all duration-500 ease-linear
          "
        />
        {/* <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhUser}
          className="w-10 h-10 rounded-lg ml-2 hover:bg-neutral-300 transition-all duration-500 ease-linear
          "
        /> */}
        <ProfileMenu />
      </div>
    </div>
  );
}
