import { Avatar } from '@ui/atoms/Avatar';
import { Typography } from '@ui/atoms/Typography/Typography';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
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
  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto">
      <Link to={ROUTES_PATH.home} className="ml-4">
        {/* <img src="/logo.jpg" alt="logo" className="h-8" /> */}
        <Typography
          color="teal"
          size="h5"
          className="text-xl sm:text-2xl "
          weight="bold"
        >
          NETFENCE
        </Typography>
      </Link>
      <div className="flex">
        <Link to={ROUTES_PATH.addUser} className="ml-4">
          <Avatar
            icon="ph:hard-drives"
            intent="grey"
            size="sm"
            className="rounded-lg"
          />
        </Link>
        <Link to={ROUTES_PATH.addUser} className="hidden sm:block ml-4">
          <Avatar
            icon="ph:user"
            intent="grey"
            size="sm"
            className="rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
}
