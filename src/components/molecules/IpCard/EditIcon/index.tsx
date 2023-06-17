import { IIp } from '@src/services/client/rules/types';
import { IconButton } from '@ui/atoms/BaseButton';
import { UpdateIp } from '@ui/molecules/IpsList/UpdateIp';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';

type PropsType = {
  item: IIp;
};

export function EditIcon({ item }: PropsType) {
  const [openModal, setOpenModal] = useState(false);

  const onClickEditButton = () => {
    setOpenModal(true);
  };
  return (
    <>
      <IconButton
        icon="ph:note-pencil"
        color="white"
        className="ml-2"
        onClick={onClickEditButton}
      />
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        content={<UpdateIp ip={item} setOpen={setOpenModal} />}
        classContainer="border border-teal-600"
        type="none"
      />
    </>
  );
}
