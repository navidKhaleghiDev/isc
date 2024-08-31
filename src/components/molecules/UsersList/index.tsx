import { useGet } from '@src/services/http/httpClient';
import { ResponseSwr } from '@src/services/client/rules/types';
import { E_USERS } from '@src/services/client/users/endpoint';
import { IUser } from '@src/services/client/users/types';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useRef, useState } from 'react';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { BackButton } from '@ui/atoms/BackButton';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { IconButton } from '@ui/atoms/BaseButton';
import PhCaretDownBold from '@iconify-icons/ph/caret-down-bold';
import { LinkButton } from '@ui/atoms/LinkButton';

import { ButtonState, TValueOnChange } from './types';
import { ContentUsersList } from './ContentUsersList';

/**
 * UsersList component to display and manage a list of users.
 * @returns {JSX.Element} The UsersList component.
 */
export function UsersList(): JSX.Element {
  const { data, mutate, isLoading } = useGet<ResponseSwr<IUser[]>>(E_USERS);
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');

  const handleMutate = () => {
    mutate();
  };

  const selectValueChange: TValueOnChange = (item) => {
    setActiveButton(item.target.value);
  };

  const selectOptions = [
    { id: '1', label: 'همه کاربران', value: 'all' },
    { id: '2', label: 'ادمین', value: 'admin' },
    { id: '3', label: 'ادمین سیستم نظارتی', value: 'analyser' },
    { id: '4', label: 'ادمین ارشد', value: 'superuser' },
  ];

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const list: IUser[] = data && Array.isArray(data?.data) ? data?.data : [];

  const filterList = list.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(search.toLowerCase()) ||
      user.last_name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filterListDrop = filterList.filter((user) => {
    switch (activeButton) {
      case 'admin':
        return user.is_admin && !user.is_superuser;
      case 'analyser':
        return user.is_analyser && !user.is_admin;
      case 'superuser':
        return user.is_superuser;
      default:
        return true;
    }
  });

  const selectRef = useRef<HTMLSelectElement | null>(null);
  const handelClick = () => {
    selectRef.current?.showPicker();
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-baseline pb-6">
        <div className="py-4 grid grid-cols-2 gap-7">
          <SearchInput onChange={handleOnSearch} value={search} />
          <div className="relative">
            <BaseSelect
              id="rulesSort"
              ref={selectRef}
              name="rulesSort"
              selectOptions={selectOptions}
              pureOnChange={selectValueChange}
              fullWidth
            />
            <IconButton
              onClick={handelClick}
              className="bg-white size-3 absolute top-1 left-1"
              icon={PhCaretDownBold}
            />
          </div>
        </div>
        <div className="flex justify-start lg:justify-end gap-6">
          <div className="w-40 sm:w-48">
            <LinkButton
              label="اضافه کردن کاربر"
              link={ROUTES_PATH.addUser}
              fullWidth
            />
          </div>
          <div className="hidden sm:block">
            <BackButton backToReferrer />
          </div>
        </div>
      </div>
      <ContentUsersList
        data={filterListDrop}
        handleMutate={handleMutate}
        isLoading={isLoading}
      />

      {/* note: Pagination has been disable cause do not have service for this */}
      {/* <Pagination currentPage={1} onPageChange={() => {}} totalPages={100} /> */}
    </div>
  );
}
