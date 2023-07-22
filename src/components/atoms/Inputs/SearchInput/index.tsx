import { useDebounce } from '@src/helper/hooks/useDebounce';
import { useEffect, useRef, useState } from 'react';
import { BaseInput } from '../BaseInput';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
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
        size="sm"
        name="ip"
        placeholder="جستجو کنید"
        id="ip"
        pureOnChange={handleSearchChange}
        pureValue={searchValue}
        ref={inputRef}
        fullWidth
      />
    </div>
  );
}
