import { useState } from 'react';
import { MyRulesList } from '@ui/molecules/Rules/MyRulesList';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { PageBackButton } from '@ui/atoms/BackButton';

function MyRulePageCp() {
  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="w-full flex flex-col h-full mt-[51px] px-11">
      <div className="flex justify-between items-center ">
        <SearchInput onChange={handleOnSearch} value={search} />
        <div className="text-left">
          <PageBackButton />
        </div>
      </div>
      <MyRulesList />
    </div>
  );
}

export { MyRulePageCp };
