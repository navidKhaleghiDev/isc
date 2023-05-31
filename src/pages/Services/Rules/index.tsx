import { RulesList } from '../components/molecules/RulesList';
import { ServicesFilterAndList } from '../components/templates/ServicesFilterAndList';

export function RulesPage() {
  return (
    <ServicesFilterAndList>
      <RulesList />
    </ServicesFilterAndList>
  );
}
