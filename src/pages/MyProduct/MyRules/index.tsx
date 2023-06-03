import { FilterAndList } from '@ui/Templates/FilterAndList';
import { RulesList } from '@ui/molecules/RulesList';

export function MyProductMyRulesPage() {
  return (
    <FilterAndList withIps>
      <RulesList />
    </FilterAndList>
  );
}
