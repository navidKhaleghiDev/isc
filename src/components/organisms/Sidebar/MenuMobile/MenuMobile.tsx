import { useLocation } from 'react-router-dom';
import { MenuMobileItem } from './component/MenuItem';
import { INavigation } from '../types';
import { navigationSideBar } from '../navigation';

/**
 * SideBar Component
 *
 * This component renders the sidebar navigation menu, including menu items, accordions for mean items that has children ,
 * and a logout button. It also shows the status of services.
 *
 * @component
 * @returns {JSX.Element} The rendered sidebar component.
 */

export function MenuMobile(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className="sm:hidden w-full h-full">
      <div className="fixed bottom-4 flex justify-around sm:flex-col w-full px-20 bg-neutral-100 rounded-full">
        {navigationSideBar.map((item: INavigation) => {
          return (
            <MenuMobileItem
              key={item.id}
              item={item}
              pathname={pathname}
              collapsed={false}
            />
          );
        })}
      </div>
    </div>
  );
}
