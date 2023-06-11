import { Pagination } from '@ui/molecules/Pagination';
import { FilterIps } from '@ui/Templates/FilterAndList/components/molecules/Filter/Ips';
import { MyRulesList } from '@ui/molecules/MyRulesList';

export function MyProductMyRulesPage() {
  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <FilterIps />
      <MyRulesList />
      <Pagination />
    </div>
  );
}
