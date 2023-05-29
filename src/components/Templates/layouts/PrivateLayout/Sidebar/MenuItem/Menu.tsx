import { Link } from 'react-router-dom';
import { BaseIcon, Typography } from '@ui/atoms';

import { menuItemStyles } from './styles';
import { IMenuItem } from './types';

export function MenuItem({ item, active }: IMenuItem) {
  return (
    <Link className={menuItemStyles({ active })} to={item.path}>
      {item?.icon && <BaseIcon icon={item.icon} />}
      <Typography className="mr-3">{item.label}</Typography>
    </Link>
  );
}
