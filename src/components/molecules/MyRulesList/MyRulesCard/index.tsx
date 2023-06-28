import { persianDateNumber } from '@src/helper/utils/dateUtils';
import { IMyRule } from '@src/services/client/rules/types';
import { BaseIcon, Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { API_DELETE_MY_RULE } from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { Modal } from '../../Modal';

type PropsType = {
  myRule: IMyRule;
  isHeader?: boolean;
  mutateMyRulesList: () => void;
};

export function MyRulesCard({
  myRule,
  mutateMyRulesList,
  isHeader,
}: PropsType) {
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);

  const handleRequestDelete = async () => {
    await API_DELETE_MY_RULE(myRule.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutateMyRulesList();
      })
      .catch((err) => {
        toast.error(err);
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
          <div className=" w-1/4">
            {!isHeader && (
              <div className="flex items-center gap-2">
                <Link to={`${ROUTES_PATH.myProductMyRules}/${myRule.id}`}>
                  <IconButton icon="jam:more-vertical" color="white" />
                </Link>
                <IconButton
                  icon="ph:trash-simple"
                  color="red"
                  onClick={toggleModalDelete}
                />
                {myRule.isUpdated && (
                  <BaseIcon icon="radix-icons:update" color="red" />
                )}
              </div>
            )}
          </div>
          <div className="flex w-2/4">
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3 w-1/2 text-center break-words"
            >
              {myRule.creator.email}
            </Typography>
            <Typography
              color="neutral"
              size="body3"
              type="div"
              className="px-3 w-1/2 text-center break-words"
            >
              {!isHeader
                ? persianDateNumber(myRule.created_at)
                : myRule.created_at}
            </Typography>
          </div>
          <Typography
            color="neutral"
            size="h5"
            weight="medium"
            className="w-1/4 text-left break-words"
          >
            {myRule.rule_name}
          </Typography>
        </div>
      </Card>
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این قانون مطمئن هستید؟"
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
