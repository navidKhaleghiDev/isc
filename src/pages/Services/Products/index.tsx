import { FilterAndList } from '@ui/Templates/FilterAndList';
import { ProductList } from '@ui/molecules/ProductList';
import { productCardData } from './dataMock';

export function ProductsPage() {
  return (
    <FilterAndList>
      <ProductList list={productCardData} />
    </FilterAndList>
  );
}
