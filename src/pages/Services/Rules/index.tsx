import { useState } from 'react';
// import { Dropdown } from '@ui/atoms';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { TValueOnChange } from '@ui/atoms/DropDown/type';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';

import { ButtonState } from './types';

function RulesPageCP() {
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const dropValueChange: TValueOnChange = (value) => {
    setActiveButton(value.target.value);
  };
  const dropDownOptions = [
    { id: '1', label: 'همه قوانین', value: 'all' },
    { id: '2', label: 'قوانین پیشنهادی', value: 'suggest' },
  ];

  return (
    <div className="w-full flex flex-col h-full mt-[51px] px-11">
      <form className="p-4 flex justify-start items-center gap-4">
        {activeButton === 'all' && (
          <SearchInput onChange={handleOnSearch} value={search} />
        )}

        <BaseSelect
          id="rulesSort"
          name="rulesSort"
          selectOptions={dropDownOptions}
          size="lg"
          pureOnChange={dropValueChange}
        />
      </form>
      <RulesList buttonState={activeButton} searchValue={search} />
    </div>
  );
}

const RulesPage = WithPermission(RulesPageCP, EUserRole.ADMIN, true);
export { RulesPage };
