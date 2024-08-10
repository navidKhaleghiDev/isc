import { E_SERVER_PRODUCT_DEVICE } from '@src/services/server/products/endpoint';
import useSWR from 'swr';
import { fetcherServer } from '@src/services/server/httpServer';
import { ResponseSwr } from '@src/services/client/rules/types';

import { IServerProducts } from '@src/services/server/products/types';
import { ProductCard } from '../ProductCard';
import { LoadingSpinner } from '../Loading';
import { NoResult } from '../NoResult';

/**
 * ProductList Component
 *
 * This component fetches and renders a list of products using SWR.
 *
 * @component
 *
 * @returns {JSX.Element} Returns a component that displays a list of products.
 */

export function ProductList(): JSX.Element {
  const { data, isLoading } = useSWR<ResponseSwr<IServerProducts[]>>(
    E_SERVER_PRODUCT_DEVICE,
    fetcherServer
  );
  const listProduct = data?.data ?? [];

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div>
      {listProduct.length > 0 ? (
        listProduct.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
}
