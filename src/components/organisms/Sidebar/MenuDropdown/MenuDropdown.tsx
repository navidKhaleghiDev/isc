import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';
import { menuItemStyles } from '../MenuItem/styles';
import { INavigation } from '../types';

interface MenuDropdownProps {
  items: INavigation[];
  mouseHover: () => void;
}

/**
 * @component
 * @param {MenuDropdownProps}  props The props for MenuDropdown component
 * @param {INavigation}  props.item The navigation item data, including path, label, and icon
 * @param {INavigation}  props.mouseHover The props for handle mouseHover
 * @returns {JSX.Element} The render MenuDropdown component
 */
export function MenuDropdown({
  items,
  mouseHover,
}: MenuDropdownProps): JSX.Element {
  return (
    <div
      className="absolute right-full z-50 w-40 h-[7.25rem] bg-white shadow-md rounded-2xl pt-2 mx-1"
      onMouseLeave={mouseHover}
    >
      {items.map((item) => (
        <div key={item.id}>
          <Link key={item.id} className={menuItemStyles({})} to={item.path}>
            {item.icon && <BaseIcon icon={item.icon} />}
            <Typography className="mr-3" size="body5">
              {item.label}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  );
}
