import { useState } from 'react';
import { MyRulesList } from '@ui/molecules/Rules/MyRulesList';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { PageBackButton } from '@ui/atoms/BackButton';
import { Typography } from '@ui/atoms';
// import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';

/**
 * MyRulePageCp component
 *
 * This component as a page for displaying and searching through a list of rules
 *
 * @component
 *
 * @returns {JSX.Element} The rendered MyRulePageCp component
 */

function MyRulePageCp(): JSX.Element {
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  // Note: disable cause we do not have services for this functionality
  // const selectValueOnChange = () => {};
  // const dropDownOptions = [
  //   { id: 1, label: 'همه ی قوانین', value: 'همه ی قوانین' },
  //   { id: 1, label: '‍‍‍بیشنهادی قوانین', value: 'قوانین ‍‍‍بیشنهادی' },
  // ];

  return (
    <div className="w-full flex flex-col h-full">
      <Typography size="body1" weight="bold" className="block sm:hidden mb-5">
        قوانین محصول
      </Typography>
      <div className="flex items-center justify-between">
        <div className="grid sm:grid-cols-2 md:flex gap-[1.87rem]">
          <SearchInput onChange={handleOnSearch} value={search} />
          {/* note: BaseSelect has been disable cause do not have service for this */}
          {/* <div className="md:w-64">
            <BaseSelect
              id="rulesSort"
              name="rulesSort"
              selectOptions={dropDownOptions}
              pureOnChange={selectValueOnChange}
              fullWidth
            />
          </div> */}
        </div>
        <div className="text-left lg:flex lg:items-center lg:justify-center hidden">
          <PageBackButton />
        </div>
      </div>
      <MyRulesList searchValue={search} />
    </div>
  );
}

export { MyRulePageCp };
