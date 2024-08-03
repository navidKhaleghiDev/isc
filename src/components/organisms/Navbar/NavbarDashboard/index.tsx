import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Typography } from '@ui/atoms/Typography/Typography';
import PhUser from '@iconify-icons/ph/user';
import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { IconButton } from '@ui/atoms/BaseButton';
import { PageBackButton } from '@ui/atoms/BackButton';

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
  const location = useLocation();
  const navigate = useNavigate();
  const statusHandle = () => {
    setStatusOpen(!statusOpen);
  };
  const backButtonRoutes = [
    ROUTES_PATH.addUser,
    ROUTES_PATH.settings,
    ROUTES_PATH.myProductMyRules,
    ROUTES_PATH.myProductIpsList,
    ROUTES_PATH.myProductMyRulesRetrieve,
  ];
  const showBackButton = backButtonRoutes.includes(location.pathname);
  return (
    <div className="flex h-20 items-center justify-between px-5 2xl:container 2xl:mx-auto">
      <Link to={ROUTES_PATH.home}>
        <Typography
          color="teal"
          size="h5"
          className="hidden sm:flex text-xl sm:text-2xl"
          weight="bold"
        >
          NETFENCE
        </Typography>

        {!showBackButton ? (
          <Typography
            color="teal"
            size="h5"
            className="flex sm:hidden text-xl sm:text-2xl"
            weight="bold"
          >
            NETFENCE
          </Typography>
        ) : (
          <div className="flex justify-center items-center  sm:hidden ">
            <PageBackButton onClick={() => navigate(-1)} />
          </div>
        )}
      </Link>

      <div className="flex justify-center items-center">
        <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhHardDrives}
          onClick={statusHandle}
          className={`w-10 h-10 rounded-lg ml-2  hover:bg-neutral-300 transition-all duration-700 ease-linear  ${
            statusOpen ? 'bg-neutral-300 hover:bg-neutral-300' : ''
          }`}
        />
        <IconButton
          size="xxl"
          type="button"
          color="neutralLight"
          icon={PhUser}
          className={`w-10 h-10 rounded-lg   hover:bg-neutral-300 transition-all duration-700 ease-linear  
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
