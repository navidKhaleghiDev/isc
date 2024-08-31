import { useEffect, useState } from 'react';
import { NavbarDashboard } from '@ui/organisms/Navbar/NavbarDashboard';
import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '@context/user/userContext';
import { LoadingPage } from '@ui/molecules/Loading';
import { MenuMobile } from '@ui/organisms/Sidebar/MenuMobile/MenuMobile';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_USERS_PROFILE } from '@src/services/client/users';
import { STORAGE_KEY_TOKEN, http } from '@src/services/http';
import cookie from 'js-cookie';
import { withAuth } from '@src/helper/hoc/withAuth';

import { SideBar } from '../../../organisms/Sidebar';

/**
 * LayoutCp component that provides the main layout for the application.
 *
 * @component
 * @returns {JSX.Element} The layout component wrapped with authentication.
 */

function LayoutCp(): JSX.Element {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    <div className="flex h-screen bg-white font-kalameh">
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="sm:shadow-sm z-10 border-neutral-200">
          <NavbarDashboard />
        </header>
        <div className="flex sm:flex-row h-full overflow-y-auto px-0.5 2xl:container 2xl:mx-auto 2xl:justify-center">
          <nav className="flex mx-auto sm:h-full">
            <div className="flex items-center justify-center w-full h-full shadow-md z-10 sm:w-fit">
              <SideBar />
            </div>
          </nav>
          <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto bg-white mb-9">
            <div className="relative flex flex-col w-full h-full gap-16 mx-auto">
              <div className="flex flex-col gap-16 sm:h-full">
                <div className="pt-5 sm:pt-[3.12rem] px-3 sm:px-8 sm:h-full">
                  <Outlet />
                </div>
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
