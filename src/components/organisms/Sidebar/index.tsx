import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import PhCaretRight from '@iconify-icons/ph/caret-right';
import PhCaretLeft from '@iconify-icons/ph/caret-left';
import { IconButton } from '@ui/atoms/BaseButton';
import ToolTip from '@ui/atoms/Tooltip';

import { navigationSideBar } from './navigation';
import { INavigation } from './types';
import { MenuItem } from './MenuItem';
// import { MenuDropdown } from './MenuDropdown/MenuDropdown';
import { MenuItemAccordion } from './MenuItemAccordion';
// import { MenuItemAccordion } from './MenuItemAccordion';

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
  const [open, setOpen] = useState<number | null>(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleOpen = (value: number | null) => {
    setOpen(value);
  };

  const toggleSideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };
  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };

  return (
    <div
      className={`hidden sm:flex flex-col justify-between items-end w-16 ${
        toggleSidebar && 'w-64'
      } h-full`}
    >
      <div className="flex flex-col items-center w-full mt-10 px-4">
        {navigationSideBar.map((item: INavigation, i: number) => {
          if (!item.items) {
            return !toggleSidebar ? (
              <ToolTip position="left" key={item.id} tooltip={`${item.label}`}>
                <MenuItem
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  collapsed={!toggleSidebar}
                />
              </ToolTip>
            ) : (
              <MenuItem
                key={item.id}
                item={item}
                pathname={pathname}
                collapsed={!toggleSidebar}
              />
            );
          }

          return (
            <MenuItemAccordion
              key={item.id}
              item={item}
              open={open}
              setOpen={handleOpen}
              index={i}
              icon={item.icon}
              pathname={pathname}
              collapsed={!toggleSidebar}
            />
          );
        })}
      </div>
      {/* <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-yellow-200 w-40 h-28 p-3 absolute rounded-lg"
      >
        <button>Dropdown menu</button>
        {isDropdownVisible && <MenuDropdown />}
      </div> */}

      <div
        className={`hidden sm:flex flex-col ${
          toggleSidebar ? 'items-end' : 'items-center'
        }  	w-full mb-4 px-4`}
      >
        <div className="flex flex-col w-10 h-10 rounded-lg">
          <IconButton
            size="xxl"
            color="tealDark"
            icon={toggleSidebar ? PhCaretRight : PhCaretLeft}
            onClick={toggleSideBar}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
}
