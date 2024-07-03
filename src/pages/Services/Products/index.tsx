import { FilterAndList } from '@ui/Templates/FilterAndList';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { ProductList } from '@ui/molecules/ProductList';
import { Suspense } from 'react';

export function ProductsPage() {
  return (
    <FilterAndList>
      <Suspense fallback={<LoadingSpinner centerParent />}>
        <ProductList />
      </Suspense>
    </FilterAndList>
  );
}
