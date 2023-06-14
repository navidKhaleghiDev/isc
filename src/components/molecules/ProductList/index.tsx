import { E_SERVER_PRODUCT_DEVICE } from '@src/services/server/products/endpoint';
import useSWR from 'swr';
import { fetcherServer } from '@src/services/server/httpServer';
import { ResponseSwr } from '@src/services/client/rules/types';

import { IServerProducts } from '@src/services/server/products/types';
// import { Pagination } from '../Pagination';
import { IProductCard, ProductCard } from '../ProductCard';
import { LoadingSpinner } from '../Loading';

type PropsType = {
  list: IProductCard[];
};

export function ProductList({ list }: PropsType) {
  const { data, isLoading } = useSWR<ResponseSwr<IServerProducts[]>>(
    E_SERVER_PRODUCT_DEVICE,
    fetcherServer
  );
  const listProduct = data?.data ?? [];

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
