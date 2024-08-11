import { useState } from 'react';
import PhPencilSimple from '@iconify-icons/ph/pencil-simple';
import PhTrashSimple from '@iconify-icons/ph/trash-simple';
import { toast } from 'react-toastify';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import {
  API_DELETE_VALID_IPS,
  API_UPDATE_VALID_IPS,
} from '@src/services/client/rules';
import { EIpType, IIp } from '@src/services/client/rules/types';

import { UpdateIp } from '../UpdateIp';
import { Modal } from '../../../Modal';

const ipTypeClasses: { [key in EIpType]: string } = {
  [EIpType.INTERNAL]: 'bg-yellow-100',
  [EIpType.EXTERNAL]: 'bg-teal-200',
  [EIpType.ALL]: '',
};
type PropsType = {
  mutateIpList: () => void;
  item: IIp;
};

export function IpCard({ item, mutateIpList }: PropsType) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [modalsLoading, setModalsLoading] = useState({
    deleteButton: false,
    editButton: false,
  });

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

  const handleRequestDelete = async () => {
    setModalsLoading((prev) => ({ ...prev, deleteButton: true }));
    await API_DELETE_VALID_IPS(item.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        toggleModalDelete();
        mutateIpList();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, deleteButton: false }));
      });
  };

  const handleRequestUpdate = async (newIp: string) => {
    setModalsLoading((prev) => ({ ...prev, editButton: true }));
    await API_UPDATE_VALID_IPS(item.id as string, { ip: newIp })
      .then(() => {
        toast.success('با موفقیت ویرایش شد');
        toggleModalEdit();
        mutateIpList();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, editButton: false }));
      });
  };
  const ipTypeClass = ipTypeClasses[item.ip_type] || '';

  return (
    <>
      <Card
        shadow="sm"
        border
        borderColor="neutral_light"
        className="flex sm:h-[9.75rem] h-[9.25rem] items-center"
      >
        <div className="flex flex-col w-full mx-7">
          <div className="flex flex-col items-end">
            <Typography color="neutral_dark" size="body3" weight="medium">
              {item.ip}
            </Typography>
            <Typography
              color="neutral_light"
              size="body4"
              className={`px-3 my-3 rounded-full ${ipTypeClass}`}
            >
              ({item.ip_type})
            </Typography>
          </div>
          <div className="flex">
            {' '}
            <IconButton
              icon={PhPencilSimple}
              color="neutral"
              size="xxl"
              onClick={toggleModalEdit}
            />
            <IconButton
              icon={PhTrashSimple}
              color="redNoBg"
              size="xxl"
              onClick={toggleModalDelete}
            />
          </div>
        </div>
      </Card>
      <Modal
        size="sm"
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        content={
          <UpdateIp
            ip={item}
            onSubmit={handleRequestUpdate}
            loading={modalsLoading.editButton}
          />
        }
        type="none"
      />
      <Modal
        size="md"
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این IP مطمئن هستید؟"
        buttonOne={{
          color: 'redBg',
          size: 'lg',
          label: 'بله',
          onClick: handleRequestDelete,
          loading: modalsLoading.deleteButton,
        }}
      />
    </>
  );
}
