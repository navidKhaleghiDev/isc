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
        <div className="flex sm:flex-row h-full overflow-y-auto px-0.5  2xl:container 2xl:mx-auto 2xl:justify-center">
          <nav className="flex sm:h-full ">
            <div className="w-full flex mx-auto">
              <div className=" flex items-center justify-center w-full sm:w-fit h-full  sm:border-l-4  shadow-md border-neutral-200  transition-all	duration-1000	ease-linear">
                <SideBar />
              </div>
            </div>
          </nav>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto">
            <div className="flex w-full mx-auto h-full ">
              <div className="relative flex flex-col w-full h-full">
                <div className="flex flex-col gap-16 ">
                  <div className="pt-5 sm:pt-[3.12rem] mb-9 px-3 sm:px-8">
                    <Outlet />
                  </div>
                  <MenuMobile />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default withAuth(LayoutCp);
