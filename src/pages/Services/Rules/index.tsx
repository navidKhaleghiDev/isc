import { useState } from 'react';
import { Dropdown } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { TValueOnChange } from '@ui/atoms/DropDown/type';

import { ButtonState } from './types';

function RulesPageCP() {
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');
  const { control } = useForm();

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const dropValueChange: TValueOnChange = (value) =>
    setActiveButton(value.title);
  const dropDownOptions = [
    { id: '1', label: 'همه قوانین', title: 'all' },
    { id: '2', label: 'قوانین پیشنهادی', title: 'suggest' },
  ];

  return (
    <div className="w-full flex flex-col h-full mt-[51px] px-11">
      <form className="p-4 flex justify-start items-center gap-4 ">
        {activeButton === 'all' && (
          <SearchInput onChange={handleOnSearch} value={search} />
        )}
        <Dropdown
          options={dropDownOptions}
          placeHolder="همه قوانین"
          control={control}
          name="rulesSortOptions"
          size="lg"
          id="rules-sort"
          valueOnChange={dropValueChange}
        />
      </form>
      <RulesList buttonState={activeButton} searchValue={search} />
    </div>
  );
}

const RulesPage = WithPermission(RulesPageCP, EUserRole.ADMIN, true);
export { RulesPage };
