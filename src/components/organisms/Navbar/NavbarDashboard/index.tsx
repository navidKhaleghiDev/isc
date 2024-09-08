import { Link, matchPath, useLocation } from 'react-router-dom';
import { Typography } from '@ui/atoms/Typography/Typography';
import { BackButton } from '@ui/atoms/BackButton';
import { ROUTES_PATH } from '@src/routes/routesConstants';

import { StatusDropdown } from '../Status';
import { ProfileMenu } from '../ProfileMenu';

/**
 * @component
 * @returns{JSX.Element}
 */

export function NavbarDashboard(): JSX.Element {
  const location = useLocation();

  const backButtonRoutes = [
    ROUTES_PATH.users,
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
          size="h4"
          className="text-xl sm:text-2xl"
          weight="bold"
        >
          NETFENCE
        </Typography>
      </Link>
      <div>
        {!showBackButton ? null : (
          <div className="flex justify-center items-center sm:hidden">
            <BackButton backToReferrer />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <StatusDropdown />
        <ProfileMenu />
      </div>
    </div>
  );
}
