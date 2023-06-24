import { useGet } from '@src/services/http/httpClient';
import { ResponseSwr } from '@src/services/client/rules/types';
import { E_USERS } from '@src/services/client/users/endpoint';
import { IUser } from '@src/services/client/users/types';
import { UserCard } from './UserCard';
import { myRulesListData } from './dataMock';

const headerItem: any = {
  id: 'ویرایش',
  first_name: 'نام و نام خانوادگی',
  date_joined: 'تاریخ ثبت ',
  email: 'ایمیل',
};

export function UsersList() {
  const { data, mutate } = useGet<ResponseSwr<IUser[]>>(E_USERS);

  const list: IUser[] =
    data && Array.isArray(data?.data) ? data?.data : myRulesListData;

  const handleMutate = () => {
    mutate();
  };

  return (
    <div className="w-full mt-8">
      <UserCard mutateUserList={handleMutate} user={headerItem} isHeader />
      {list.map((item) => (
        <UserCard key={item.id} mutateUserList={handleMutate} user={item} />
      ))}
    </div>
  );
}
