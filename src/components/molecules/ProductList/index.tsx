import { E_SERVER_PRODUCT_DEVICE } from '@src/services/server/products/endpoint';
import useSWR from 'swr';
import { fetcherServer } from '@src/services/server/httpServer';
import { ResponseSwr } from '@src/services/client/rules/types';

import { IServerProducts } from '@src/services/server/products/types';
import { ProductListData } from '@src/pages/Services/Products/dataMock';
// import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';
import { LoadingSpinner } from '../Loading';

export function ProductList() {
  const { data, isLoading } = useSWR<ResponseSwr<IServerProducts[]>>(
    E_SERVER_PRODUCT_DEVICE,
    fetcherServer
  );
  const listProduct = data?.data ?? ProductListData;

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="w-full h-full flex flex-col justify-between mt-8">
      <div>
        {listProduct.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      {/* <Pagination /> */}
    </div>
  );
}
