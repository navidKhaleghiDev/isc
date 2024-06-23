import { BaseIcon, Typography } from '@ui/atoms';
import { INavigation } from '../navigation';
import { MenuItem } from '../MenuItem/Menu';
import { IMenuItemAccordion } from './types';
import { menuItemStyles } from '../MenuItem/styles';

export function MenuItemAccordion({
  open,
  setOpen,
  index,
  item,
  pathname,
  icon,
  collapsed = false,
}: IMenuItemAccordion) {
  const isParentPath = pathname.split('/')[1] || 'false';

  return (
    <>
      <button
        type="button"
        className={menuItemStyles({
          active: item.path === `/${isParentPath}`,
        })}
        onClick={() => setOpen(open === index ? null : index)}
      >
        <BaseIcon icon={icon} />
        {!collapsed && (
          <Typography className="mr-3" size="body2">
            {item.label}
          </Typography>
        )}
        <BaseIcon
          icon="iconamoon:arrow-left-2-light"
          className={open === index ? '-rotate-90' : ''}
        />
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
    </>
  );
}
