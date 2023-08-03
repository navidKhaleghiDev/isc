import { PageBackButton } from '@ui/atoms/BackButton';
import { MyRulesList } from '@ui/molecules/Rules/MyRulesList';

export function MyProductMyRulesPage() {
  return (
    <div className="w-full flex flex-col h-full p-16">
      <PageBackButton />
      <MyRulesList />
    </div>
  );
}
