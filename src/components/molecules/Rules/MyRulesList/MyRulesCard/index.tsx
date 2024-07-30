import { IMyRule } from '@src/services/client/rules/types';
import { BaseIcon, Card, Typography } from '@ui/atoms';
import { useState } from 'react';
import { API_DELETE_MY_RULE } from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { Modal } from '@ui/molecules/Modal';
import { Link } from 'react-router-dom';
import { IconButton } from '@ui/atoms/BaseButton';
import { ROUTES_PATH } from '@src/routes/routesConstants';

type PropsType = {
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
 * @param {Object} props - The props for the MyRulesCard component.
 * @param {IMyRule} props.myRule - The rule information to be displayed in the card.
 * @param {boolean} [props.isHeader] - Flag to indicate if the card is a header.
 * @param {function(): void} props.mutateMyRulesList - Function to refresh the rules list after deletion.
 *
 * @returns {JSX.Element} The rendered MyRulesCard component.
 */

export function MyRulesCard({
  myRule,
  mutateMyRulesList,
}: PropsType): JSX.Element {
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
        className=" w-full md:w-[255px] h-[154px] p-[30px] text-left border-teal-600"
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
            <BaseIcon icon="ph:dots-three" size="md" />
          </Link>
          <IconButton
            icon="ph:trash-simple"
            size="xxl"
            color="red"
            onClick={toggleModalDelete}
            className="bg-white"
          />
        </div>
      </Card>
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        size="md"
        type="error"
        title={`از حذف  قانون ${myRule.rule_name} مطمئن هستید؟`}
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
