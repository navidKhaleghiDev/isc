import { ProductList } from '../components/molecules/ProductList';
import { ServicesFilterAndList } from '../components/templates/ServicesFilterAndList';

export function ProductPage() {
  return (
    <ServicesFilterAndList>
      <ProductList />
    </ServicesFilterAndList>
  );
}
