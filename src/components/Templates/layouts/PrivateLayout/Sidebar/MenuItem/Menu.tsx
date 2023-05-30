import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';

import { menuItemStyles } from './styles';
import { IMenuItem } from './types';

export function MenuItem({ item, active, isChildren }: IMenuItem) {
  return (
    <Link className={menuItemStyles({ active, isChildren })} to={item.path}>
      {item?.icon && <BaseIcon icon={item.icon} />}
      <Typography className="mr-3" size="body2">
        {item.label}
      </Typography>
    </Link>
  );
}
