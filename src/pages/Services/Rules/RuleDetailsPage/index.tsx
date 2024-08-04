import { RulesCodeTemplate } from '@ui/Templates/RulesCode';
import { PageBackButton } from '@ui/atoms/BackButton';
import { RuleDetail } from '@ui/molecules/Rules/RuleDetail';

/**
 * RuleDetailsPage component
 * 
 * This component serves as a detailed view page for a specific rule.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered RuleDetailsPage component

 */

export function RuleDetailsPage(): JSX.Element {
  return (
    <RulesCodeTemplate>
      <div className="text-end hidden md:block">
        <PageBackButton />
      </div>
      <RuleDetail />
    </RulesCodeTemplate>
  );
}
