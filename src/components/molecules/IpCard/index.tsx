import { IIp } from '@src/services/client/rules/types';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { useState } from 'react';
import {
  API_DELETE_VALID_IPS,
  API_UPDATE_VALID_IPS,
} from '@src/services/client/rules';
import { toast } from 'react-toastify';

import { Modal } from '../Modal';
import { UpdateIp } from '../IpsList/UpdateIp';

type PropsType = {
  mutateIpList: () => void;
  item: IIp;
};

export function IpCard({ item, mutateIpList }: PropsType) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

  const handleRequestDelete = async () => {
    await API_DELETE_VALID_IPS(item.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutateIpList();
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  const handleRequestUpdate = async (newIp: string) => {
    await API_UPDATE_VALID_IPS(item.id as string, { ip: newIp })
      .then(() => {
        toast.success('با موفقیت ویرایش شد');
        mutateIpList();
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  return (
    <>
      <Card
        color="neutral"
        className="border-l-[0.2rem] border-teal-600 flex h-14 items-between px-2 my-2"
      >
        <div className="w-full flex justify-between items-center">
          <div className="flex">
            <IconButton
              icon="ph:note-pencil"
              color="white"
              className="ml-2"
              onClick={toggleModalEdit}
            />
            <IconButton
              icon="ph:trash-simple"
              color="red"
              onClick={toggleModalDelete}
            />
          </div>
          <div className="flex ">
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3"
            >
              {item.created_at}
            </Typography>
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3"
            >
              {item.updated_at}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography
              color="neutral"
              size="body3"
              weight="medium"
              className="ml-2"
            >
              ({item.ip_type})
            </Typography>
            <Typography color="neutral" size="h5" weight="medium">
              {item.ip}
            </Typography>
          </div>
        </div>
      </Card>
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        content={
          <UpdateIp
            ip={item}
            onSubmit={handleRequestUpdate}
            onCloseModal={toggleModalEdit}
          />
        }
        classContainer="border border-teal-600"
        type="none"
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این IP مطمئن هستید؟"
        buttonOne={{ label: 'بله', onClick: handleRequestDelete }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalDelete,
          color: 'red',
        }}
      />
    </>
  );
}
