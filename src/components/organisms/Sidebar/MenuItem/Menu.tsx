import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';

import { menuItemStyles } from './styles';
import { IMenuItem } from './types';

export function MenuItem({
  item,
  pathname,
  isChildren,
  collapsed = false,
}: IMenuItem) {
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
      {item?.icon && <BaseIcon icon={item.icon} />}
      {!collapsed && (
        <Typography className="mr-3" size="body2">
          {item.label}
        </Typography>
      )}
    </Link>
  );
}
