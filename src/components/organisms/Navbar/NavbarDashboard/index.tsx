import { useUserContext } from '@context/user/userContext';
import { Avatar } from '@ui/atoms/Avatar';
import { Typography } from '@ui/atoms/Typography/Typography';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { getRoleUser } from './utils';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function NavbarDashboard() {
  const { user } = useUserContext();
  return (
    <nav className="bg-white w-full px-8 mb-1 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between p-3">
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
        {/* search and button */}
        {/* <BaseInput
          control={control}
          name="search"
          id="search"
          placeholder="...جستجو"
          className="pl-10 self-baseline"
          startIcon="material-symbols:search"
          hiddenError
        /> */}
        <img src="/logo.jpg" alt="logo" />
      </div>
    </nav>
  );
}
