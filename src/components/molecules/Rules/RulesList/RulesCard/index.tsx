import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PhDotsThree from '@iconify-icons/ph/dots-three';
import PhPlus from '@iconify-icons/ph/plus';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';

import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_ADD_RULE } from '@src/services/client/rules';
import { IRules } from '@src/services/client/rules/types';

/**
 * Props for RulesCard component.
 *
 * @typedef {Object} PropsType
 * @property {IRules} rule - The rule object to display.
 */

type PropsType = { rule: IRules };

/**
 * RulesCard Component
 *
 * This component displays a rule card with options to view details and add the rule.
 *
 * @component
 *
 * @param {PropsType} props - Props for RulesCard component.
 *
 * @returns {JSX.Element} The rendered RulesCard component.
 */

export function RulesCard({ rule }: PropsType) {
  const [openModal, setOpenModal] = useState(false);
  const [addLoading, setAddLoading] = useState(false);

  const onClickAddButton = () => setOpenModal(true);

  const handleRequestAdd = async () => {
    setAddLoading(true);

    await API_ADD_RULE({ id: rule.id })
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
        color="white"
        shadow="sm"
        className="h-[9.62rem] p-8 border-teal-600"
      >
        <div className="flex flex-col" dir="ltr">
          <Typography
            color="black"
            type="p"
            className="h-16 text-sm font-semibold"
          >
            {rule.name}
          </Typography>
          <div className="flex self-end gap-1 items-center">
            <IconButton
              icon={PhPlus}
              color="tealDark"
              size="xxl"
              className="text-white"
              onClick={onClickAddButton}
            />
            <Link to={`${ROUTES_PATH.servicesRules}/${rule.id}`}>
              <IconButton
                icon={PhDotsThree}
                color="white"
                size="xxl"
                onClick={onClickAddButton}
              />
            </Link>
          </div>
        </div>
      </Card>

      <Modal
        size="md"
        open={openModal}
        setOpen={setOpenModal}
        type="success"
        title={`قانون ${rule.name} اضافه شود ؟‌`}
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
