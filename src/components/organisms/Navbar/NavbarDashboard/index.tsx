import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Typography } from '@ui/atoms/Typography/Typography';
import PhUser from '@iconify-icons/ph/user';
import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { IconButton } from '@ui/atoms/BaseButton';

import { ServerStatus } from '../StatusServices';

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
  const [statusOpen, setStatusOpen] = useState(false);

  const statusHandle = () => {
    setStatusOpen(!statusOpen);
  };
  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto">
      <Link to={ROUTES_PATH.home} className="ml-4">
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
        <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhHardDrives}
          onClick={statusHandle}
          className={`flex justify-center items-center w-10 h-10   rounded-lg ml-2  hover:bg-neutral-300 transition-all duration-700 ease-out  ${
            statusOpen ? 'bg-neutral-300 hover:bg-neutral-300' : ''
          }`}
        />
        <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhUser}
          className={`flex justify-center items-center w-10 h-10   rounded-lg ml-2  hover:bg-neutral-300 transition-all duration-700 ease-out  
          }`}
        />
      </div>
      {statusOpen && (
        <ServerStatus
          open={statusOpen}
          // setOpen={setIsModalOpen}
          className="relative"
        />
      )}
    </div>
  );
}
