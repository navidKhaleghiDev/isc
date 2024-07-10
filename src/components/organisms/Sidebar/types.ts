import { RoutePathType } from '@src/routes/types';

export interface INavigation {
  id: string;
  label: string;
  path: RoutePathType | string;
  isNewTab?: boolean;
  icon?: string;
  items?: INavigation[];
}
