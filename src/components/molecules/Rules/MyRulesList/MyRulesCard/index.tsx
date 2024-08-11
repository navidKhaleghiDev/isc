import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhDotsThree from '@iconify-icons/ph/dots-three';
import PhTrashSimple from '@iconify-icons/ph/trash-simple';
import { toast } from 'react-toastify';
import { BaseIcon, Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';
import { IMyRule } from '@src/services/client/rules/types';
import { API_DELETE_MY_RULE } from '@src/services/client/rules';
import { ROUTES_PATH } from '@src/routes/routesConstants';

type TMyRuleCardProp = {
  myRule: IMyRule;
  mutateMyRulesList: () => void;
};

/**
 * MyRulesCard Component
 *
 * This component renders a card displaying information about a user's rule.
 * It includes options for viewing more details and deleting the rule.
 *
 * @component
 *
 * @param {IMyRule} props.myRule - The rule information to be displayed in the card.
 * @param {function(): void} props.mutateMyRulesList - Function to refresh the rules list after deletion.
 *
 * @returns {JSX.Element} The rendered MyRulesCard component.
 */

export function MyRulesCard({
  myRule,
  mutateMyRulesList,
}: TMyRuleCardProp): JSX.Element {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);

  const handleRequestDelete = async () => {
    setDeleteLoading(true);
    await API_DELETE_MY_RULE(myRule.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        toggleModalDelete();
        mutateMyRulesList();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };

  return (
    <>
      <Card
        color="white"
        shadow="sm"
        className="w-full h-[9.62rem] p-[1.87rem] mb-5 sm:mb-0 text-left border-teal-600"
      >
        <Typography
          color="black"
          type="p"
          className="h-16 text-sm font-semibold"
        >
          {myRule.rule_name}
        </Typography>
        <div className="flex items-center gap-2">
          <Link
            to={`${ROUTES_PATH.myProductMyRules}/${myRule.id}`}
            state={{ isUpdated: myRule.isUpdated }}
          >
            <BaseIcon icon={PhDotsThree} size="md" />
          </Link>
          <IconButton
            icon={PhTrashSimple}
            size="xxl"
            color="red"
            onClick={toggleModalDelete}
            className="bg-white"
          />
        </div>
      </Card>
      <Modal
        size="md"
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title={`از حذف  قانون ${myRule.rule_name} مطمئن هستید؟`}
        buttonOne={{
          label: 'بله',
          onClick: handleRequestDelete,
          loading: deleteLoading,
          color: 'redBg',
        }}
      />
    </>
  );
}
