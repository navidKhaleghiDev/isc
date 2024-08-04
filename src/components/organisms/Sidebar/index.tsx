import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import PhCaretRight from '@iconify-icons/ph/caret-right';
import PhCaretLeft from '@iconify-icons/ph/caret-left';
import { BaseIcon } from '@ui/atoms';

import { navigationSideBar } from './navigation';
import { INavigation } from './types';
// import { MenuItemAccordion } from './MenuItemAccordion';
import { MenuItem } from './MenuItem';

/**
 * SideBar Component
 *
 * This component renders the sidebar navigation menu, including menu items, accordions for mean items that has children ,
 * and a logout button. It also shows the status of services.
 *
 * @component
 * @returns {JSX.Element} The rendered sidebar component.
 */

export function SideBar(): JSX.Element {
  const { pathname } = useLocation();
  // const [open, setOpen] = useState<number | null>(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  // const handleOpen = (value: number | null) => {
  //   setOpen(value);
  // };

  const toggleSideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  // const isMobile = window.innerWidth <= 390;

  return (
    <div
      className={`hidden sm:flex ${
        toggleSidebar && 'w-64'
      } flex-col justify-between items-end h-full overflow-hidden`}
    >
      <div className="flex flex-col items-center w-full mt-10 px-4">
        {navigationSideBar.map((item: INavigation) =>
          !item.items ? (
            <MenuItem
              key={item.id}
              item={item}
              pathname={pathname}
              collapsed={!toggleSidebar}
            />
          ) : (
            // <MenuItemAccordion
            //   key={item.id}
            //   item={item}
            //   open={open}
            //   setOpen={handleOpen}
            //   index={i}
            //   icon={item.icon}
            //   pathname={pathname}
            //   collapsed={!toggleSidebar}
            // />
            ''
          )
        )}
      </div>

      <div className="hidden sm:flex flex-col items-end	w-full mb-4 px-4">
        <button
          type="submit"
          className="flex flex-col justify-center items-center w-10 h-10 bg-teal-500 rounded-lg text-center"
          onClick={toggleSideBar}
        >
          {!toggleSidebar ? (
            <BaseIcon icon={PhCaretLeft} className=" text-white w-6 h-6" />
          ) : (
            <BaseIcon icon={PhCaretRight} className="text-white w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
