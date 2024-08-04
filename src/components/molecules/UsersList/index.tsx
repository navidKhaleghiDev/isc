import { useGet } from '@src/services/http/httpClient';
import { ResponseSwr } from '@src/services/client/rules/types';
import { E_USERS } from '@src/services/client/users/endpoint';
import { IUser } from '@src/services/client/users/types';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useState } from 'react';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { useForm } from 'react-hook-form';
import { Dropdown } from '@ui/atoms';
import { BackButton } from '@ui/atoms/BackButton';
import { LinkButton } from '@ui/atoms/LinkButton';
import { ButtonState, TValueOnChange } from './types';
import { ContentUsersList } from './ContentUsersList';

/**
 * UsersList component to display and manage a list of users.
 * @returns {JSX.Element} The UsersList component.
 */
export function UsersList(): JSX.Element {
  const { data, mutate } = useGet<ResponseSwr<IUser[]>>(E_USERS);
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');
  const { control } = useForm();

  const handleMutate = () => {
    mutate();
  };

  const dropValueChange: TValueOnChange = (value) => {
    setActiveButton(value.title);
  };

  const dropDownOptions = [
    { id: '1', label: 'همه کاربران', title: 'all' },
    { id: '2', label: 'ادمین', title: 'admin' },
    { id: '3', label: 'ادمین سیستم نظارتی', title: 'analyser' },
    { id: '4', label: 'ادمین ارشد', title: 'superuser' },
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

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-baseline pb-6">
        <div className="py-4 grid grid-cols-2 gap-7">
          <SearchInput onChange={handleOnSearch} value={search} />
          <Dropdown
            options={dropDownOptions}
            placeHolder="همه کاربران"
            control={control}
            name="rulesSortOptions"
            size="lg"
            id="rules-sort"
            valueOnChange={dropValueChange}
            fullWidth
          />
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
      <ContentUsersList data={filterListDrop} handleMutate={handleMutate} />
    </div>
  );
}
