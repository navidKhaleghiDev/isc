import { BaseButton, Card } from '@ui/atoms';
import { RulesList } from '@ui/molecules/RulesList';
import { useState } from 'react';
import { ButtonState } from './types';

export function RulesPage() {
  const [activeButton, setActiveButton] = useState<ButtonState>('suggest');

  const handleClickTab = (tab: ButtonState) => {
    setActiveButton(tab);
  };

  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <Card
        color="neutral"
        className="p-4 flex justify-center items-center gap-4"
      >
        <BaseButton
          label="قوانین پیشنهادی"
          type={activeButton === 'suggest' ? 'default' : 'shadow'}
          onClick={() => handleClickTab('suggest')}
        />
        <BaseButton
          label="همه قوانین"
          type={activeButton === 'all' ? 'default' : 'shadow'}
          onClick={() => handleClickTab('all')}
        />
        {/* <Select label="مرتب سازی" /> */}
      </Card>
      <RulesList buttonState={activeButton} />
      {/* <Pagination /> */}
    </div>
  );
}
