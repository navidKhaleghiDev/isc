import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUserContext } from '@context/user/userContext';
import { http } from '@src/services/http';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { BaseButton } from '@ui/atoms';
import { navigationSideBar } from './navigation';
import { INavigation } from './types';
import { MenuItemAccordion } from './MenuItemAccordion';
import { MenuItem } from './MenuItem';
import { StatusServices } from './StatusServices';

/**
 * SideBar Component
 *
 * This component renders the sidebar navigation menu, including menu items, accordions for mean items that has children ,
 * and a logout button. It also shows the status of services.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered sidebar component.
 */

export function SideBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<number | null>(null);

  const handleOpen = (value: number | null) => {
    setOpen(value);
  };

  const { setUser } = useUserContext();

  const handleLogout = () => {
    http.removeAuthHeader();
    setUser(null);
    navigate(ROUTES_PATH.login);
  };

  return (
    <div className="flex flex-col items-center w-full h-full overflow-hidden text-gray-700 dark:bg-gray-500 rounded">
      <div className="flex flex-col items-center w-full mt-10 px-4">
        {navigationSideBar.map((item: INavigation, i: number) =>
          !item.items ? (
            <MenuItem
              key={item.id}
              item={item}
              pathname={pathname}
              collapsed={false}
            />
          ) : (
            <MenuItemAccordion
              key={item.id}
              item={item}
              open={open}
              setOpen={handleOpen}
              index={i}
              icon={item.icon}
              pathname={pathname}
              collapsed={false}
            />
          )
        )}
        <BaseButton
          type="neutral"
          className=" flex items-center justify-start w-full h-10 pr-3 my-2 rounded bg-transparent text-red-600 hover:bg-neutral-100 "
          onClick={handleLogout}
          label="خروج"
          startIcon="material-symbols:logout-sharp"
        />
        <StatusServices />
      </div>
    </div>
  );
}
