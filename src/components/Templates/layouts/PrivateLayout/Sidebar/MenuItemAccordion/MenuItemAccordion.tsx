/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { BaseIcon, Typography } from '@ui/atoms';
import { INavigation } from '../navigation';
import { MenuItem } from '../MenuItem/Menu';
import { IMenuItemAccordion } from './types';
import { menuItemStyles } from '../MenuItem/styles';

/* eslint-disable jsx-a11y/label-has-associated-control */
export function MenuItemAccordion({
  open,
  setOpen,
  index,
  item,
  active,
}: IMenuItemAccordion) {
  return (
    <>
      <button
        type="button"
        className={menuItemStyles({ active })}
        onClick={() => setOpen(open === index ? null : index)}
      >
        <BaseIcon icon="fluent-mdl2:product" />
        <Typography className="mr-3" size="body2">
          {item.label}
        </Typography>
        <BaseIcon
          icon="iconamoon:arrow-left-2-light"
          className={open === index ? '-rotate-90' : ''}
        />
      </button>
      <div className={`${open !== index && 'hidden'} w-full`}>
        {item.items?.map((i: INavigation) => (
          <MenuItem key={i.id} item={i} isChildren />
        ))}
      </div>
    </>
  );
}
