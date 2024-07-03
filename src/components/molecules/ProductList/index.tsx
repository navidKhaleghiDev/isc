import { E_SERVER_PRODUCT_DEVICE } from '@src/services/server/products/endpoint';
import useSWR from 'swr';
import { fetcherServer } from '@src/services/server/httpServer';
import { ResponseSwr } from '@src/services/client/rules/types';

import { IServerProducts } from '@src/services/server/products/types';
import { ProductCard } from '../ProductCard';
import { NoResult } from '../NoResult';

export function ProductList() {
  const { data } = useSWR<ResponseSwr<IServerProducts[]>>(
    E_SERVER_PRODUCT_DEVICE,
    fetcherServer,
    { suspense: true }
  );
  const listProduct = data?.data ?? [];

  return (
    <div>
      {listProduct.length > 0 ? (
        listProduct.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <NoResult />
      )}
    </div>
  );
}
