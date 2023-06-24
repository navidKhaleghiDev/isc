import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

import { Typography } from '@ui/atoms';
import { NavbarHome } from '@ui/organisms/Navbar/NavbarHome';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useUserContext } from '@context/user/userContext';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function HomePage() {
  const { user } = useUserContext();

  return (
    <div className="font-on min-h-screen flex flex-col items-center">
      <NavbarHome />
      <div
        className="max-w-screen-sm flex flex-col justify-center items-center flex-1"
        dir="ltr"
      >
        <Typography className="text-justify" size="body2">
          The application is built using Python with the Django REST Framework
          for the backend and React Vite for the frontend. The purpose of the
          application is to implement an IPS service that works with Snort,
          providing rule-based intrusion detection and prevention. The
          application also integrates with Kibana for monitoring Snort and Zeek
          logs. Additionally, the system includes OSSEC and IP tables for
          enhanced security. The IDS (Intrusion Detection System) component is
          implemented using Zeek, and its logs are displayed in Kibana. This
          documentation outlines the architecture and key components of the
          system.
        </Typography>

        <Link to={user ? ROUTES_PATH.dashboard : ROUTES_PATH.login}>
          <BaseButton
            label={user ? 'برو به داشبورد' : 'ورود'}
            className="mt-6 w-64"
            endIcon="ic:outline-login"
            size="lg"
          />
        </Link>
      </div>
    </div>
  );
}
