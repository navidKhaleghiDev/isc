import { IconifyIcon } from '@iconify/react';
import { VariantProps } from 'class-variance-authority';
import { INavigation } from '../types';
import { menuItemStyles } from '../MenuItem/styles';

export interface IMenuItemAccordion
  extends VariantProps<typeof menuItemStyles> {
  open: number | null;
  setOpen: (open: number | null) => void;
  index: number;
  item: INavigation;
  pathname: string;
  icon?: string | IconifyIcon | undefined;
  collapsed: boolean;
}
