import { useUserContext } from '@context/user/userContext';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { http } from '@src/services/http';
import { BaseIcon, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { MenuItem } from '@ui/organisms/Sidebar/MenuItem';
import { MenuItemAccordion } from '@ui/organisms/Sidebar/MenuItemAccordion';
import {
  INavigation,
  navigationSideBar,
} from '@ui/organisms/Sidebar/navigation';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
function Sidebar({ collapsed, shown, setCollapsed }: Props) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<number | null>(null);
  const { setUser } = useUserContext();

  const handleOpen = (value: number | null) => {
    setOpen(value);
  };

  const handleLogout = () => {
    http.removeAuthHeader();
    setUser(null);
  };

  return (
    <div
      className={`h-full bg-neutral-100 z-20 transition-all duration-300 ease-in-out fixed md:static md:translate-x-0 ${
        collapsed ? 'w-16' : 'w-[300px]'
      } ${!shown && 'translate-x-full'}`}
    >
      <div className="flex flex-col justify-between h-full">
        <div
          className={`flex items-center border-b border-b-indigo-800 ${
            collapsed ? 'py-4 justify-center' : 'p-4 justify-between'
          }`}
        >
          {!collapsed && (
            <span className="whitespace-nowrap">
              <img src="/logo.jpg" alt="logo" />
            </span>
          )}
          <IconButton
            onClick={() => setCollapsed(!collapsed)}
            color="neutral"
            icon={collapsed ? 'ph:caret-double-left' : 'ph:caret-double-right'}
            className="grid place-content-center hover:bg-neutral-300 w-10 h-10 rounded-full"
          />
        </div>

        <nav className="flex-grow">
          <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navigationSideBar.map((item: INavigation, i: number) =>
              !item.items ? (
                <MenuItem
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  collapsed={collapsed}
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
                  collapsed={collapsed}
                />
              )
            )}
            <button
              type="button"
              className="flex items-center w-full h-10 pr-3 my-2 rounded hover:bg-neutral-100 hover:text-teal-600"
              onClick={handleLogout}
            >
              <BaseIcon icon="material-symbols:logout-sharp" color="red" />
              {!collapsed && (
                <Typography color="red" className="mr-3" size="body2">
                  خروج
                </Typography>
              )}
            </button>
          </ul>
        </nav>

        <div className="grid place-content-stretch p-4">
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <img
              src="https://picsum.photos/600/400/?random"
              height={36}
              width={36}
              alt="profile"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-indigo-50 my-0">Tom Cook</span>
                <Link to={ROUTES_PATH.home} className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
