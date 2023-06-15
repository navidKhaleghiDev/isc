import React, { useEffect } from 'react';
import { NavbarDashboard } from '@ui/organisms/Navbar/NavbarDashboard';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '@context/user/userContext';
import { LoadingPage } from '@ui/molecules/Loading';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { http } from '@src/services/http';
import { SideBar } from '../../../organisms/Sidebar';

export default function Layout() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // if (!user) {
    //   http.removeAuthHeader();
    //   navigate(ROUTES_PATH.login);
    // }
    setLoading(false);
  }, [navigate, user]);

  if (!loading) {
    return (
      <div className="font-on w-full min-h-screen bg-gray-200 flex flex-col 2xl:container 2xl:mx-auto">
        <NavbarDashboard />
        <div className="w-full h-full grid grid-cols-12 gap-1 flex-1">
          <div className="bg-white w-full col-span-2">
            <SideBar />
          </div>
          <div className="bg-white w-full col-span-10">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <LoadingPage />;
}
