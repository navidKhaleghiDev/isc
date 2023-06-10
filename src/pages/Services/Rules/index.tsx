import { BaseButton, Card } from '@ui/atoms';
import { Select } from '@ui/atoms/Select';
import { Pagination } from '@ui/molecules/Pagination';
import { RulesList } from '@ui/molecules/RulesList';

export function RulesPage() {
  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <Card
        color="neutral"
        className="p-4 flex justify-center items-center gap-4"
      >
        <BaseButton label="قوانین پیشنهادی" type="shadow" />
        <BaseButton label="همه قوانین" type="shadow" />
        <Select label="مرتب سازی" />
      </Card>
      <RulesList />
      <Pagination />
    </div>
  );
}
