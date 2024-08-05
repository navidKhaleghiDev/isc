import { BaseIcon, Typography } from '@ui/atoms';
import { INavigation } from '../types';
import { MenuItem } from '../MenuItem/Menu';
import { IMenuItemAccordion } from './types';
import { menuItemStyles } from '../MenuItem/styles';

/**
 * MenuItemAccordion Component
 *
 * This component renders an accordion-style menu item that can be expanded or collapsed.
 * It displays an icon, label, and a toggle button to expand or collapse the submenu items.
 *
 * @component
 *
 * @param {IMenuItemAccordion} props - The props for the MenuItemAccordion component.
 * @param {number} props.open - The index of the currently open accordion item, or null if none are open.
 * @param {React.Dispatch<React.SetStateAction<number | null>>} props.setOpen - Function to set the index of the open accordion item.
 * @param {number} props.index - The index of this accordion item.
 * @param {INavigation} props.item - The navigation item data for this accordion item.
 * @param {string} props.pathname - The current pathname for determining active states.
 * @param {string} props.icon - The icon to display for this accordion item.
 * @param {boolean} [props.collapsed=false] - Indicates if the menu item is collapsed by default.
 *
 * @returns {JSX.Element} The rendered MenuItemAccordion component.
 */

export function MenuItemAccordion({
  open,
  setOpen,
  index,
  item,
  pathname,
  icon,
  collapsed,
}: IMenuItemAccordion): JSX.Element {
  const isParentPath = pathname.split('/')[1] || 'false';

  return (
    <div className="">
      <button
        type="button"
        className={menuItemStyles({
          active: item.path === `/${isParentPath}`,
        })}
        onClick={() => setOpen(open === index ? null : index)}
      >
        <BaseIcon icon={icon} className="w-6 h-6   " />
        {!collapsed && (
          <Typography className="mr-3" size="body4">
            {item.label}
          </Typography>
        )}
      </button>
      <div className={`${open !== index && 'hidden'} w-full`}>
        {item.items?.map((i: INavigation) => (
          <MenuItem
            key={i.id}
            item={i}
            pathname={pathname}
            isChildren
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
}
