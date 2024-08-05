import { useState } from 'react';
import { RulesList } from '@ui/molecules/Rules/RulesList';
import { WithPermission, EUserRole } from '@src/helper/hoc/withPermission';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { TValueOnChange } from '@ui/atoms/DropDown/type';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { Typography } from '@ui/atoms';

import { ButtonState } from './types';

/**
 * RulesPageCP is a component that renders a rules.
 * It includes a search input and a select to filter rules by category.
 *
 * @component
 * @returns {JSX.Element}
 */

function RulesPageCP(): JSX.Element {
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const selectValueChange: TValueOnChange = (value) => {
    setActiveButton(value.target.value);
  };
  const selectOptions = [
    { id: '1', label: 'همه قوانین', value: 'all' },
    { id: '2', label: 'قوانین پیشنهادی', value: 'suggest' },
  ];

  return (
    <div className="w-full flex flex-col h-full">
      <Typography weight="bold" size="body1" className="block md:hidden">
        لیست قوانین
      </Typography>
      <div className="p-4 grid grid-cols-2 md:flex md:justify-start md:items-center gap-4">
        <SearchInput onChange={handleOnSearch} value={search} />
        <div className="md:w-64">
          <BaseSelect
            id="rulesSort"
            name="rulesSort"
            selectOptions={selectOptions}
            pureOnChange={selectValueChange}
            fullWidth
          />
        </div>
      </div>
      <RulesList buttonState={activeButton} searchValue={search} />
    </div>
  );
}

const RulesPage = WithPermission(RulesPageCP, EUserRole.ADMIN, true);
export { RulesPage };
