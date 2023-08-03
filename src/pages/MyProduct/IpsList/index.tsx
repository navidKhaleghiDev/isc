import { FilterIps } from '@ui/Templates/FilterAndList/components/molecules/Filter/Ips';
import { PageBackButton } from '@ui/atoms/BackButton';
import { IpsList } from '@ui/molecules/IpsList';

export function IpsListPage() {
  return (
    <div className="w-full flex flex-col h-full p-16">
      <PageBackButton />
      <FilterIps />
      <IpsList />
    </div>
  );
}
