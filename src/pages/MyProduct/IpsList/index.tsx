import { FilterIps } from '@ui/Templates/FilterAndList/components/molecules/Filter/Ips';
import { IpsList } from '@ui/molecules/IpsList';

export function IpsListPage() {
  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <FilterIps />
      <IpsList />
    </div>
  );
}
