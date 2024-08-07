import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';
import { menuItemStyles } from '../MenuItem/styles';
import { INavigation } from '../types';

interface MenuDropdownProps {
  items: INavigation[];
}

/**
 * @component
 * 
 * @param {MenuDropdownProps}  props the props for MenuDropdown component
 * @param {INavigation}  props.item The navigation item data, including path, label, and icon.

 * @returns {JSX.Element} the render MenuDropdown component
 */
export function MenuDropdown({ items }: MenuDropdownProps): JSX.Element {
  return (
    <div className="absolute right-full z-50 w-40 h-[7.25rem] bg-white shadow-md rounded-2xl mx-1">
      {items.map((item) => (
        <Link key={item.id} className={menuItemStyles({})} to={item.path}>
          {item?.icon && <BaseIcon icon={item.icon} className="w-6 h-6" />}
          <Typography className="mr-3" size="body5">
            {item.label}
          </Typography>
        </Link>
      ))}
    </div>
  );
}
