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
import { API_USERS_DELETE } from '@src/services/client/users';
import { toast } from 'react-toastify';
import { ButtonState, TValueOnChange } from './types';
import { Modal } from '../Modal';
import { TableContainer } from '../TableComponent/TableContainer';
import { Column } from '../TableComponent/types';
import { NoResult } from '../NoResult';

export function UsersList() {
  const { data, mutate } = useGet<ResponseSwr<IUser[]>>(E_USERS);
  const [activeButton, setActiveButton] = useState<ButtonState>('all');
  const [search, setSearch] = useState('');
  const { control } = useForm();
  const handleMutate = () => {
    mutate();
  };

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [userId, setUserId] = useState<number | string>('');

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);

  const handleRequestDelete = async () => {
    setDeleteLoading(true);
    await API_USERS_DELETE(userId as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        handleMutate();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        toggleModalDelete();
        setDeleteLoading(false);
      });
  };

  const dropValueChange: TValueOnChange = (value) =>
    setActiveButton(value.title);

  const dropDownOptions = [
    { id: '1', label: 'همه کاربران', title: 'all' },
    { id: '2', label: 'ادمین', title: 'is_admin' },
    { id: '3', label: 'ادمین سیستم نظارتی', title: 'is_analyser' },
    { id: '4', label: 'ادمین ارشد', title: 'is_superuser' },
  ];

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const list: IUser[] = data && Array.isArray(data?.data) ? data?.data : [];

  const columns: Column[] = [
    {
      type: 'fullName',
      accessor: ['first_name', 'last_name'],
      header: 'نام',
    },
    {
      type: 'default',
      accessor: 'email',
      header: 'ایمیل',
    },
    {
      type: 'default',
      accessor: 'userType',
      header: 'نوع کاربری',
    },
    {
      type: 'date',
      accessor: 'date_joined',
      header: 'تاریخ ثبت نام',
    },
    {
      type: 'component',
      actionType: 'edit',
      accessor: 'edit',
      editRoute: ROUTES_PATH.addUser + activeButton,
    },
    {
      type: 'component',
      actionType: 'delete',
      accessor: 'delete',
      onDelete: setUserId,
      openModal: toggleModalDelete,
    },
  ];

  return (
    <div className="w-full mt-8">
      {list.length > 0 ? (
        <>
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
              <LinkButton
                label="اضافه کردن کاربر"
                link={ROUTES_PATH.addUser}
                size="xl"
              />
              <div className="hidden sm:block">
                <BackButton backToReferrer />
              </div>
            </div>
          </div>
          <TableContainer columns={columns} data={list} />

          <Modal
            open={openModalDelete}
            setOpen={setOpenModalDelete}
            size="md"
            type="error"
            title="از حذف این کاربر مطمئن هستید؟"
            buttonOne={{
              label: 'بله',
              onClick: handleRequestDelete,
              loading: deleteLoading,
            }}
          />
        </>
      ) : (
        <NoResult />
      )}
    </div>
  );
}
