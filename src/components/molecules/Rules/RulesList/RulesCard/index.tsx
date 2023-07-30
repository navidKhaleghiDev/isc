import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_ADD_RULE } from '@src/services/client/rules';
import { IRules } from '@src/services/client/rules/types';
import { Card, Typography } from '@ui/atoms';
import { BaseButton, IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type PropsType = { rule: IRules };

export function RulesCard({ rule }: PropsType) {
  const [openModal, setOpenModal] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const onClickAddButton = () => setOpenModal(true);

  const handleRequestAdd = async () => {
    setAddLoading(true);

    await API_ADD_RULE({ id: rule.id, rule_code: rule.code })
      .then(() => {
        toast.success('با موفقیت اضافه شد');
        setOpenModal(false);
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setAddLoading(false);
      });
  };

  return (
    <>
      <Card
        color="neutral"
        className="border-l-[0.2rem] border-teal-600 flex h-14 items-center px-2 my-2"
      >
        <div className="w-full flex justify-between items-center">
          <Link to={`${ROUTES_PATH.servicesRules}/${rule.id}`}>
            <IconButton icon="jam:more-vertical" color="white" />
          </Link>
          <BaseButton
            label="افزودن"
            endIcon="ic:baseline-plus"
            className="ml-auto mr-2"
            type="shadow"
            size="sm"
            onClick={onClickAddButton}
          />
          <Typography color="teal" size="body2" type="div">
            {rule.name}
          </Typography>
        </div>
      </Card>

      <Modal
        open={openModal}
        setOpen={setOpenModal}
        type="success"
        title="آیا مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleRequestAdd,
          loading: addLoading,
        }}
        buttonTow={{
          color: 'red',
          label: 'خیر',
          onClick: () => setOpenModal(false),
        }}
      />
    </>
  );
}
