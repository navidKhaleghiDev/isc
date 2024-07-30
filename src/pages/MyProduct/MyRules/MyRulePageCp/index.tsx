import { useState } from 'react';
import { MyRulesList } from '@ui/molecules/Rules/MyRulesList';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { PageBackButton } from '@ui/atoms/BackButton';
import { Typography } from '@ui/atoms';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';

function MyRulePageCp() {
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };
  const selectValueOnChange = () => {};
  const dropDownOptions = [
    { id: 1, label: 'همه ی قوانین', value: 'همه ی قوانین' },
    { id: 1, label: '‍‍‍بیشنهادی قوانین', value: 'قوانین ‍‍‍بیشنهادی' },
  ];

  return (
    <div className="w-full flex flex-col h-full sm:mt-[51px] md:px-11">
      <Typography size="body1" weight="bold" className="block sm:hidden">
        قوانین محصول
      </Typography>
      <div className="grid grid-cols-2 md:flex gap-[30px]  mt-5">
        <SearchInput onChange={handleOnSearch} value={search} />
        <div>
          <BaseSelect
            id="rulesSort"
            name="rulesSort"
            selectOptions={dropDownOptions}
            pureOnChange={selectValueOnChange}
            fullWidth
          />
        </div>
        <div className="text-left hidden lg:block">
          <PageBackButton />
        </div>
      </div>
      <MyRulesList />
    </div>
  );
}

export { MyRulePageCp };
