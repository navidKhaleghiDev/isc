import { IServerProducts } from '@src/services/server/products/types';

export interface IProductCard {
  id: string;
  ruleName: string;
  description: string;
  link?: string;
}

export type PropsType = { item: IServerProducts };
