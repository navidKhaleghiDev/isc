import { VariantProps } from 'class-variance-authority';

import { menuItemStyles } from './styles';
import { INavigation } from '../navigation';

export interface IMenuItem extends VariantProps<typeof menuItemStyles> {
  item: INavigation;
}
