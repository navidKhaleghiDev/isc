import { toast } from 'react-toastify';
import { API_USERS_DELETE } from '@src/services/client/users';
import { useState } from 'react';
import { Column, IData } from '@ui/molecules/TableComponent/types';
import { TableContainer } from '@ui/molecules/TableComponent/TableContainer';
import { Modal } from '@ui/molecules/Modal';
import { NoResult } from '@ui/molecules/NoResult';
import { LoadingSpinner } from '@ui/molecules/Loading';

import { ContentUsersListProps } from './types';

/**
 * ContentUsersList component to display a list of users in a table.
 * @param {IData[]} props.data - Array of user data to be displayed in the table.
 * @param {function} props.handleMutate - Function to refresh the data.
 * @returns {JSX.Element} The ContentUsersList component.
 */

export function ContentUsersList({
  data,
  handleMutate,
  isLoading,
}: ContentUsersListProps): JSX.Element {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [userId, setUserId] = useState<number | string>('');
  const [selectedRow, setSelectedRow] = useState<IData>();

  const toggleModalDelete = (row?: IData) => {
    setSelectedRow(row);
    setOpenModalDelete(!openModalDelete);
  };

  /**
   * Handles the deletion request of a user.
   */

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

  const columns: Column[] = [
    {
      type: 'fullName',
      accessor: ['first_name', 'last_name'],
      header: 'نام',
      className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
    },
    {
      type: 'default',
      accessor: 'email',
      header: 'ایمیل',
      className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
    },
    {
      type: 'default',
      accessor: 'userType',
      header: 'نوع کاربری',
      className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
    },
    {
      type: 'date',
      accessor: 'date_joined',
      header: 'تاریخ ثبت نام',
      className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 sm:min-w-fit w-1/2 min-w-[200px]',
    },
    // {
    //   type: 'component',
    //   actionType: 'edit',
    //   accessor: 'edit',
    //   editRoute: ROUTES_PATH.changePassword,
    //   className: 'lg:w-96 w-auto [&>a]:flex [&>a]:justify-end',
    // },
    {
      type: 'component',
      actionType: 'delete',
      accessor: 'delete',
      onDelete: setUserId,
      openModal: toggleModalDelete,
      className: 'lg:w-96 w-auto pl-6',
      align: 'left',
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return data.length > 0 ? (
    <>
      <TableContainer
        columns={columns}
        data={data}
        containerClassName="w-full relative overflow-x-scroll lg:overflow-hidden"
        tableClassName="min-w-[40rem] md:w-full md:table-auto table-fixed rounded-lg"
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        size="md"
        type="error"
        title={`کاربر ${selectedRow?.email} حذف شود؟`}
        buttonOne={{
          label: 'بله',
          onClick: handleRequestDelete,
          loading: deleteLoading,
          color: 'redBg',
        }}
      />
    </>
  ) : (
    <NoResult />
  );
}
