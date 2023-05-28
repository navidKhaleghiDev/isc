import { useForm } from 'react-hook-form';

// import { BaseButton } from '@ui/atoms/BaseButton';
import { SearchInputProps } from './types';
import { BaseInput } from './BaseInput';

export function SearchInput(props: SearchInputProps) {
  const { name, id, fullWidth, size } = props;
  const { control } = useForm();
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <BaseInput
        control={control}
        name={name}
        id={id}
        placeholder="جستجو..."
        className="pl-10"
        fullWidth={fullWidth}
        size={size}
      />
      {/* <BaseButton
        onClick={() => true}
        label="Search"
        size="sm"
        className="absolute right-2.5 inset-y-1"
      /> */}
    </div>
  );
}
