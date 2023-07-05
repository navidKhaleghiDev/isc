import { IIp, ResponseSwr } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';

import { IpCard } from '../IpCard';
import { IpsListData } from './dataMock';
import { NoResult } from '../NoResult';

export function IpsList() {
  const { data, mutate } = useGet<ResponseSwr<IIp[]>>(E_RULES_VALID_IPS);

  const list: IIp[] =
    data && Array.isArray(data?.data) ? data?.data : IpsListData;

  const handleMutate = () => {
    mutate();
  };

  return (
    <div className="w-full mt-8">
      {list.length > 0 ? (
        list.map((item) => (
          <IpCard key={item.id} mutateIpList={handleMutate} item={item} />
        ))
      ) : (
        <NoResult />
      )}
    </div>
  );
}
