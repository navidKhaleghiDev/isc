import { toast } from 'react-toastify';
import { API_USERS_DELETE } from '@src/services/client/users';
import { useState } from 'react';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { Column, IData } from '@ui/molecules/TableComponent/types';
import { TableContainer } from '@ui/molecules/TableComponent/TableContainer';
import { Modal } from '@ui/molecules/Modal';
import { NoResult } from '@ui/molecules/NoResult';

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
      editRoute: ROUTES_PATH.addUser,
    },
    {
      type: 'component',
      actionType: 'delete',
      accessor: 'delete',
      onDelete: setUserId,
      openModal: toggleModalDelete,
    },
  ];

  return data.length > 0 ? (
    <>
      <TableContainer columns={columns} data={data} />
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
        }}
      />
    </>
  ) : (
    <NoResult />
  );
}
