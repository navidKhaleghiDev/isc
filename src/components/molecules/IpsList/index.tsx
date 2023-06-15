import { useState } from 'react';
import { IIp, ResponseSwr } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { Modal } from '../Modal';
import { IpCard } from '../IpCard';
import { UpdateIp } from './UpdateIp';
import { IpsListData } from './dataMock';

export function IpsList() {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const { data, isLoading } = useGet<ResponseSwr<IIp[]>>(E_RULES_VALID_IPS);
  const list: IIp[] = data?.data ?? IpsListData;

  const handleOnClickEdit = (id: string) => {
    setOpenModalEdit(true);
  };

  const handleOnClickEDelete = (id: string) => {
    setOpenModalDelete(true);
  };

  return (
    <div className="w-full mt-8">
      {list.map((item) => (
        <IpCard
          key={item.id}
          onClickDelete={handleOnClickEDelete}
          onClickedEdit={handleOnClickEdit}
          item={item}
        />
      ))}
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        content={<UpdateIp ip={IpsListData[0]} setOpen={setOpenModalEdit} />}
        classContainer="border border-teal-600"
        type="none"
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این IP مطمئن هستید؟"
        buttonOne={{
          label: 'خیر',
          onClick: () => setOpenModalDelete(false),
          color: 'red',
        }}
        buttonTow={{ label: 'بله', onClick: () => true, color: 'red' }}
      />
    </div>
  );
}
