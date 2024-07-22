import { useState } from 'react';
import { BaseButton, Dropdown } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';

import { ButtonState } from './types';

function RulesPageCP() {
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');
  const { control } = useForm();

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  // const dropValueChange = (value: ButtonState) => setActiveButton(value);
  const dropDownOptions = [
    { id: '1', label: 'همه قوانین' },
    { id: '2', label: 'قوانین پیشنهادی' },
  ];

  const handleClickTab = (tab: ButtonState) => {
    setActiveButton(tab);
  };

  return (
    <div className="w-full flex flex-col h-full p-16">
      <form className="p-4 flex justify-start items-center gap-4">
        {activeButton === 'all' && (
          <SearchInput onChange={handleOnSearch} value={search} />
        )}
        <Dropdown
          options={dropDownOptions}
          placeHolder="مرتب سازی قوانین"
          control={control}
          name="rulesSortOptions"
          size="lg"
          id="rules-sort"
        />
        <BaseButton
          label="جستجوی قوانین"
          size="xl"
          type="default"
          onClick={() => handleClickTab('suggest')}
        />
      </form>
      <RulesList buttonState={activeButton} searchValue={search} />
    </div>
  );
}

const RulesPage = WithPermission(RulesPageCP, EUserRole.ADMIN, true);
export { RulesPage };
