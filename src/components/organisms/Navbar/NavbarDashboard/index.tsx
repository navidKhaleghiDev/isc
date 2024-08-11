import { Link, matchPath, useLocation } from 'react-router-dom';

import { Typography } from '@ui/atoms/Typography/Typography';
import { IconButton } from '@ui/atoms/BaseButton';
import { PageBackButton } from '@ui/atoms/BackButton';
import PhUser from '@iconify-icons/ph/user';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { StatusDropdown } from '../Status';

/**
 * @component
 * @returns{JSX.Element}
 */

export function NavbarDashboard(): JSX.Element {
  const location = useLocation();

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

      <div className="flex justify-center items-center">
        <div>
          <StatusDropdown />
        </div>

        <div className="relative">
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
