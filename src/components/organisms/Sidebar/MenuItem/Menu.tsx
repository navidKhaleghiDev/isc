import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';
import { menuItemStyles } from './styles';
import { IMenuItem } from './types';

// /**
//  * MenuItem Component
//  *
//  * This component renders a single menu item with an optional icon and label.
//  * The item can be styled as active, a child item, and can optionally be collapsed.
//  *
//  * @component
//  *
//  * @param {IMenuItem} props - The props for the MenuItem component.
//  * @param {INavigation} props.item - The navigation item data, including path, label, and icon.
//  * @param {string} props.pathname - The current path for determining the active item.
//  * @param {boolean} [props.isChildren] - Indicates if this item is a child item.
//  * @param {boolean} [props.collapsed=false] - Indicates if the menu item is collapsed.
//  *
//  * @returns {JSX.Element} The rendered menu item component.
//  */

export function MenuItem({
  item,
  pathname,
  isChildren,
  collapsed,
}: IMenuItem): JSX.Element {
  const isActive = item.path === pathname;

  return (
    <Link
      className={menuItemStyles({
        active: isActive,
        isChildren,
        isActiveChildren: isActive && isChildren,
      })}
      to={item.path}
      target={item.isNewTab ? '_blank' : '_self'}
    >
      <div className={`flex ${!collapsed && 'fixed'}`}>
        {item?.icon && <BaseIcon icon={item.icon} className="w-6 h-6" />}
        {!collapsed && (
          <Typography className="mr-3 hidden sm:block " size="body4">
            {item.label}
          </Typography>
        )}
      </div>
    </Link>
  );
}
