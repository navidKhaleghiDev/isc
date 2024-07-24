import { EIpType, IIp, ResponseSwr } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';

import { IpCard } from '../IpCard';
import { NoResult } from '../NoResult';

interface IpListProp {
  filterProduct: EIpType | null;
  searchQuery: string;
}

export function IpsList({ filterProduct, searchQuery }: IpListProp) {
  const { data, mutate } = useGet<ResponseSwr<IIp[]>>(E_RULES_VALID_IPS);

  const list: IIp[] = data && Array.isArray(data?.data) ? data?.data : [];

  const handleMutate = () => {
    mutate();
  };

  const filterList = list.filter((item) => {
    const matchesType =
      filterProduct === EIpType.ALL ||
      filterProduct === null ||
      item.ip_type === filterProduct;
    const matchesSearch = item.ip.includes(searchQuery);
    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full mt-8 grid grid-cols-4 gap-7">
      {filterList.length > 0 ? (
        filterList.map((item) => (
          <IpCard key={item.id} mutateIpList={handleMutate} item={item} />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
}
