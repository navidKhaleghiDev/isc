import { useState } from 'react';
import { Modal } from '../Modal';
import { MyRulesCard } from '../MyRulesCard';
import { myRulesListData } from './dataMock';

export function MyRulesList() {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleOnClickEdit = (id: string) => {
    setOpenModalEdit(true);
  };

  const handleOnClickEDelete = (id: string) => {
    setOpenModalDelete(true);
  };

  return (
    <div className="w-full mt-8">
      {myRulesListData.map((item) => (
        <MyRulesCard
          key={item.id}
          onClickDelete={handleOnClickEDelete}
          onClickedEdit={handleOnClickEdit}
          data={item}
        />
      ))}
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        type="success"
        title="قانون جدید با موفقیت اضافه شد."
        buttonOne={{ label: 'تایید', onClick: () => true }}
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این IP مطمئن هستید؟"
        buttonOne={{ label: 'خیر', onClick: () => true, color: 'red' }}
        buttonTow={{ label: 'بله', onClick: () => true, color: 'red' }}
      />
    </div>
  );
}
