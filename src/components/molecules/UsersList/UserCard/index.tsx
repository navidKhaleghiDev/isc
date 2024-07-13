import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { IUser } from '@src/services/client/users/types';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { useState } from 'react';
import { API_USERS_DELETE } from '@src/services/client/users';
import { useUserContext } from '@context/user/userContext';
import { toast } from 'react-toastify';
import { Modal } from '../../Modal';

type PropsType = {
  user: IUser;
  isHeader?: boolean;
  mutateUserList: () => void;
};

/**
 * UserCard component displays user information and provides functionality to delete the user.
 *
 * @component
 *
 * @param {Object} props - The properties for the UserCard component.
 * @param {IUser} props.user - The user object containing user information.
 * @param {boolean} [props.isHeader] - Flag to determine if the card is a header.
 * @param {Function} props.mutateUserList - Function to refresh the user list.
 *
 * @returns {JSX.Element} The UserCard component.
 */

export function UserCard({ user, mutateUserList, isHeader }: PropsType) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { user: currentUser } = useUserContext();

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);

  const handleRequestDelete = async () => {
    setDeleteLoading(true);
    await API_USERS_DELETE(user.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutateUserList();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        toggleModalDelete();
        setDeleteLoading(false);
      });
  };

  return (
    <>
      <Card
        color="neutral"
        className={`${!isHeader && 'border-l-[0.2rem] border-teal-600'} flex ${
          isHeader ? 'h-10' : 'h-14'
        } items-between px-2 my-2`}
      >
        <div className="w-full flex justify-between items-center">
          <Typography
            color="neutral"
            size="h5"
            weight="medium"
            className="w-4/12 text-center break-words"
          >
            {user.first_name} {user.last_name}
          </Typography>

          <div className="flex w-7/12">
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3 w-1/2 text-center break-words"
            >
              {user.email}
            </Typography>
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3 w-1/2 text-center break-words"
            >
              {!isHeader
                ? persianDateNumber(user.date_joined)
                : user.date_joined}
            </Typography>
          </div>
          <div className="w-1/12">
            {!isHeader && user.email !== currentUser?.email && (
              <div className="flex justify-end">
                <IconButton
                  icon="ph:trash-simple"
                  color="red"
                  onClick={toggleModalDelete}
                />
              </div>
            )}
          </div>
        </div>
      </Card>
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این کاربر مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleRequestDelete,
          loading: deleteLoading,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalDelete,
          color: 'red',
        }}
      />
    </>
  );
}
