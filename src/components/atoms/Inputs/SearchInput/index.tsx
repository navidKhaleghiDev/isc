import { useDebounce } from '@src/helper/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { BaseInput } from '../BaseInput';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState(value);
  const debouncedSearchValue = useDebounce(searchValue, 2000);

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
        placeholder="بنویسید"
        id="ip"
        pureOnChange={handleSearchChange}
        pureValue={searchValue}
        // defaultValue={ip.ip}
        // rules={{
        //   pattern: regexPattern.ip,
        //   required: regexPattern.required,
        // }}
        fullWidth
      />
    </div>
  );
}
