import { useState } from 'react';
import { BaseButton, Dropdown } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';

import { ButtonState } from './types';

function RulesPageCP() {
  const [activeButton, setActiveButton] = useState<ButtonState>('suggest');
  const [search, setSearch] = useState('');
  const { control } = useForm();

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };
  const dropDownOptions = [
    { value: '1', label: 'مرتب سازی قوانین' },
    { value: '2', label: 'به تعویق افتاده' },
    { value: '3', label: 'در حال انجام ' },
  ];

  const handleClickTab = (tab: ButtonState) => {
    setActiveButton(tab);
  };

  return (
    <div className="w-full flex flex-col h-full p-16">
      <form className="p-4 flex justify-start items-center gap-4">
        <SearchInput onChange={handleOnSearch} value={search} />
        <Dropdown
          options={dropDownOptions}
          placeHolder="مرتب سازی قوانین"
          control={control}
          id="listener_id"
          name="rulesSortOptions"
          size="lg"
        />
        <BaseButton
          label="جستجوی قوانین"
          size="xl"
          type={activeButton === 'suggest' ? 'default' : 'shadow'}
          onClick={() => handleClickTab('suggest')}
        />
      </form>

      {/* {activeButton === 'all' && (
        <div className="w-1/3 mt-4">
          <SearchInput onChange={handleOnSearch} value={search} />
        </div>
      )} */}

      <RulesList buttonState={activeButton} searchValue={search} />
    </div>
  );
}

const RulesPage = WithPermission(RulesPageCP, EUserRole.ADMIN, true);
export { RulesPage };
