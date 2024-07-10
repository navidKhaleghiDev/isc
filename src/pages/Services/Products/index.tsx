import { FilterAndList } from '@ui/Templates/FilterAndList';
import { ProductList } from '@ui/molecules/ProductList';

export function ProductsPage() {
  return (
    <FilterAndList>
      <ProductList />
    </FilterAndList>
  );
}
