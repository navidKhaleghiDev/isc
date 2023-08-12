import React, { useEffect } from 'react';
import { NavbarDashboard } from '@ui/organisms/Navbar/NavbarDashboard';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '@context/user/userContext';
import { LoadingPage } from '@ui/molecules/Loading';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_USERS_PROFILE } from '@src/services/client/users';
import { STORAGE_KEY_TOKEN, http } from '@src/services/http';
import cookie from 'js-cookie';
import { withAuth } from '@src/helper/hoc/withAuth';

import { SideBar } from '../../../organisms/Sidebar';

function LayoutCp() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const token = cookie.get(STORAGE_KEY_TOKEN);

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true);
      await API_USERS_PROFILE()
        .then(({ data }) => {
          setUser(data);
        })
        .catch(() => {
          http.removeAuthHeader();
          navigate(ROUTES_PATH.login);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    if (!user && token) {
      getProfile();
    }
  }, [navigate, setUser, user, token]);

  if (!loading) {
    return (
      <div className="font-on w-full h-screen bg-gray-200 flex flex-col 2xl:container 2xl:mx-auto overflow-y-hidden">
        <NavbarDashboard />
        <div className="w-full h-full grid grid-cols-12 gap-1 flex-1">
          <div className="bg-white h-full w-full col-span-2">
            <SideBar />
          </div>
          <div className="bg-white w-full col-span-10 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <LoadingPage description="لطفا شکیبا باشید" />;
}

export default withAuth(LayoutCp);
