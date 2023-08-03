import { RulesCodeTemplate } from '@ui/Templates/RulesCode';
import { PageBackButton } from '@ui/atoms/BackButton';
import { RuleDetail } from '@ui/molecules/Rules/RuleDetail';

export function RuleDetailsPage() {
  return (
    <RulesCodeTemplate>
      <PageBackButton />
      <RuleDetail />
    </RulesCodeTemplate>
  );
}
