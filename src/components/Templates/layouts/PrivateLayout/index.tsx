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
import { MenuMobile } from '@ui/organisms/Sidebar/MenuMobile/MenuMobile';
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

  if (loading) {
    return <LoadingPage description="لطفا شکیبا باشید" />;
  }
  return (
    <div className="font-kalameh flex h-screen bg-white">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b-4 border-neutral-200">
          <NavbarDashboard />
        </header>
        <div className="flex flex-col-reverse sm:flex-row h-full 2xl:container 2xl:mx-auto ">
          <nav className="flex w-full  h-20 sm:w-80 sm:h-full ">
            <div className="w-full flex mx-auto">
              <div className=" flex items-center justify-center w-full sm:w-fit h-full  border-l-4  shadow-md border-neutral-200  transition-all	duration-1000	ease-linear">
                <SideBar />
              </div>
            </div>
          </nav>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            <div className="flex w-full mx-auto mb-2 h-full">
              <div className=" relative flex flex-col w-full h-full mb-2">
                <Outlet />
                <MenuMobile />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default withAuth(LayoutCp);
