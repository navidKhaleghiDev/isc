import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import PhCaretRight from '@iconify-icons/ph/caret-right';
import PhCaretLeft from '@iconify-icons/ph/caret-left';
import { IconButton } from '@ui/atoms/BaseButton';
import ToolTip from '@ui/atoms/Tooltip';

import { navigationSideBar } from './navigation';
import { INavigation } from './types';
import { MenuItem } from './MenuItem';
import { MenuDropdown } from './MenuDropdown/MenuDropdown';

export function SideBar(): JSX.Element {
  const { pathname } = useLocation();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState<INavigation | null>(
    null
  );

  const toggleSideBar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <div
      className={`hidden sm:flex flex-col justify-between items-end h-full
        ${toggleSidebar ? 'w-64' : 'w-16'}
        transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-col items-center w-full mt-10 px-4 relative">
        {navigationSideBar.map((item: INavigation) => {
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
            <div
              key={item.id}
              onMouseEnter={() => setDropdownVisible(item)}
              onMouseLeave={() => setDropdownVisible(null)}
              className={`flex justify-center items-center ${
                toggleSidebar ? 'w-full' : null
              }`}
            >
              <MenuItem
                key={item.id}
                item={item}
                pathname={pathname}
                collapsed={!toggleSidebar}
              />
              {isDropdownVisible?.id === item.id && (
                <MenuDropdown items={item.items} />
              )}
            </div>
          );
        })}
      </div>

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
