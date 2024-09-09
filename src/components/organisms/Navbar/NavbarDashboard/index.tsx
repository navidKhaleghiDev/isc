import { Link } from 'react-router-dom';
import { Typography } from '@ui/atoms/Typography/Typography';
import { BackButton } from '@ui/atoms/BackButton';

import { StatusDropdown } from '../Status';
import { ProfileMenu } from '../ProfileMenu';

/**
 * @component
 * @returns{JSX.Element}
 */

export function NavbarDashboard(): JSX.Element {
  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto relative">
      <Link to="/" className="hidden sm:flex">
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
        <div className="flex justify-center items-center sm:hidden">
          <BackButton backToReferrer />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <StatusDropdown />
        <ProfileMenu />
      </div>
    </div>
  );
}
