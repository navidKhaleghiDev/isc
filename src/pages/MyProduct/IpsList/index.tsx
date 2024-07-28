import { FilterIps } from '@ui/Templates/FilterAndList/components/molecules/Filter/Ips';
import { PageBackButton } from '@ui/atoms/BackButton';
// import { IpsList } from '@ui/molecules/IpsList';

export function IpsListPage() {
  return (
    <div className="p-16">
      <FilterIps />
      {/* <PageBackButton /> */}
      {/* <IpsList /> */}
    </div>
  );
}
