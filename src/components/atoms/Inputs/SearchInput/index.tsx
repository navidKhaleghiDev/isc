import { useDebounce } from '@src/helper/hooks/useDebounce';
import { useEffect, useState } from 'react';
import PhMagnifyingGlass from '@iconify-icons/ph/magnifying-glass';

import { BaseInput } from '../BaseInput';

interface SearchInputProps {
  value: string;
  label?: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, label, onChange }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState(value);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue, onChange]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <BaseInput
        size="lg"
        name="ip"
        placeholder="جستجو کنید"
        id="ip"
        pureOnChange={handleSearchChange}
        pureValue={searchValue}
        label={label}
        fullWidth
        startIcon={PhMagnifyingGlass}
      />
    </div>
  );
}
