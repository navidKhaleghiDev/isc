import { useUserContext } from '@context/user/userContext';
import { Avatar } from '@ui/atoms/Avatar';
import { Typography } from '@ui/atoms/Typography/Typography';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { getRoleUser } from './utils';

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
 */

export function NavbarDashboard() {
  const { user } = useUserContext();
  return (
    <div className="flex h-20 items-center justify-between p-3 2xl:container 2xl:mx-auto">
      <div className="flex items-center">
        {user?.is_superuser && (
          <Link to={ROUTES_PATH.addUser} className="ml-4">
            <Avatar icon="iconoir:add-user" intent="grey" size="sm" />
          </Link>
        )}

        <Avatar icon="ph:user" intent="primary" size="sm" className="ml-4" />

        <div>
          <Typography type="h3" weight="bold" color="teal">
            {user?.first_name || user?.last_name
              ? `${user?.first_name} ${user?.last_name}`
              : user?.email}
          </Typography>
          <Typography color="teal" size="caption">
            {getRoleUser(user?.is_superuser, user?.is_admin)}
          </Typography>
        </div>
      </div>
      <Link to={ROUTES_PATH.home}>
        <img src="/logo.jpg" alt="logo" className="h-8" />
      </Link>
    </div>
  );
}
