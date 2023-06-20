import { ROUTES_PATH } from '@src/routes/routesConstants';
import { IProductCard } from '@ui/molecules/ProductCard';

export const productCardData: IProductCard[] = [
  {
    id: '1',
    ruleName: 'Rule name 1',
    description: 'description 1',
    link: ROUTES_PATH.myProduct,
  },
  {
    id: '2',
    ruleName: 'Rule name 2',
    description: 'description 2',
    link: ROUTES_PATH.myProduct,
  },
  {
    id: '3',
    ruleName: 'Rule name 3',
    description: 'description 3',
    link: ROUTES_PATH.myProduct,
  },
  {
    id: '4',
    ruleName: 'Rule name 4',
    description: 'description 4',
    link: ROUTES_PATH.myProduct,
  },
];
