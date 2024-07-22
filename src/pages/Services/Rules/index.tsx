import { useState } from 'react';
import { BaseButton } from '@ui/atoms';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';

import { ButtonState } from './types';

function RulesPageCP() {
  const [activeButton, setActiveButton] = useState<ButtonState>('suggest');
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const handleClickTab = (tab: ButtonState) => {
    setActiveButton(tab);
  };

  return (
    <div className="w-full flex flex-col h-full p-16">
      <div className="p-4 flex justify-start items-center gap-4">
        <SearchInput onChange={handleOnSearch} value={search} />
        {/* <Dropdown
          options={[
            { value: '1', label: 'انجام شده' },
            { value: '2', label: 'به تعویق افتاده' },
            { value: '3', label: 'در حال انجام ' },
          ]}
          onSelect={() => console.log('drop')}
        /> */}
        <BaseButton
          label="جستجوی قوانین"
          size="xl"
          type={activeButton === 'suggest' ? 'default' : 'shadow'}
          onClick={() => handleClickTab('suggest')}
        />
      </div>

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
