/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation, useNavigate } from 'react-router-dom';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, useState } from 'react';
import {
  API_DELETE_MY_RULE,
  API_UPDATE_MY_RULE,
} from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { NoResult } from '@ui/molecules/NoResult';
import { CardRuleDetail } from '@ui/molecules/CardRuleDetail';
import { Modal } from '@ui/molecules/Modal';

import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';

import { CodeLine } from '../CodeLine';
import { CodeLineSelect } from '../CodeLine/CodeLineSelect';
import { AdditionalList } from '../AdditionalList';
import { myRuleDataList } from '../dataMock';

export function MyRulePolicies({ myRule }: any) {
  const navigate = useNavigate();
  const [codeList, setCodeList] = useState<SliceOrderCodeType[]>(
    myRuleDataList ?? getCodeList(myRule?.rule_code)
  );

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [valueCodeLineSelect, setValueCodeLineSelect] = useState('');
  const [changedPolicyCount, setChangedPolicyCount] = useState('0');

  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [modalsLoading, setModalsLoading] = useState({
    deleteButton: false,
    editButton: false,
  });

  const { state } = useLocation();

  const { mutate: mutateMyRules } =
    useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

  const handleOnChangeOrder = (
    { target: { value } }: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    if (codeList) {
      const newCodeList = codeList.slice();
      newCodeList[index].order = value;
      setCodeList(newCodeList);
    }
  };

  const onChangeAllOrder = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setValueCodeLineSelect(value);
    const updatedList = codeList
      ? codeList.map((obj) => ({ ...obj, order: value }))
      : [];
    setCodeList(updatedList);
  };

  const handleDeleteMyRule = async () => {
    setModalsLoading((prev) => ({ ...prev, deleteButton: true }));

    await API_DELETE_MY_RULE(myRule?.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutateMyRules();
        toggleModalDelete();
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, deleteButton: false }));
      });
  };

  const handleAddMyRule = async () => {
    setModalsLoading((prev) => ({ ...prev, editButton: true }));
    let ruleCode = '';
    if (codeList) {
      codeList.forEach((code) => {
        ruleCode += `${code.order}${code.code} \r\n\r `;
      });
    }
    // const body = codeList.for
    await API_UPDATE_MY_RULE(myRule?.id as string, { rule_code: ruleCode })
      .then(() => {
        toast.success('با موفقیت ویرایش شد');
        mutateMyRules();
        toggleModalEdit();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, editButton: false }));
      });
  };

  const addHandler = (additional: SliceOrderCodeType[]) => {
    setCodeList(additional);
  };

  const handleSetChangedPolicyCont = (changedCount: string) => {
    setChangedPolicyCount(changedCount);
  };
  console.count('MyRulePolicies');

  return (
    <>
      <div className="flex w-100 justify-between bg-neutral-100 rounded mb-2 px-2">
        <Typography size="body1" color="neutral">
          اعمال تغییرات برای تمام پالیسی ها:
        </Typography>
        <CodeLineSelect
          value={valueCodeLineSelect}
          onChange={onChangeAllOrder}
          className="text-2xl"
        />
      </div>
      <Card color="neutral" className="p-4 max-h-[24rem] overflow-y-auto">
        {codeList.length > 0 ? (
          codeList.map((code: SliceOrderCodeType, index: number) => {
            return (
              <CodeLine
                key={`${index}_${code.order}`}
                code={code}
                onChangeOrder={(event: ChangeEvent<HTMLSelectElement>) =>
                  handleOnChangeOrder(event, index)
                }
              />
            );
          })
        ) : (
          <NoResult />
        )}
      </Card>
      <div className="flex w-full justify-between items-center mt-8">
        <div className="flex">
          <CardRuleDetail
            label="سیاست ها"
            value={`${Object.entries(codeList).length}`}
            className="ml-5"
          />
          <CardRuleDetail label="تغییرداده‌شده‌ها" value={changedPolicyCount} />
        </div>
        <div className="w-full flex justify-end">
          <BaseButton
            label="حذف"
            size="sm"
            type="red"
            className="ml-5"
            onClick={toggleModalDelete}
          />
          <BaseButton label="ثبت" size="sm" onClick={toggleModalEdit} />
        </div>
      </div>
      {state?.isUpdated && (
        <AdditionalList
          myRuleId={myRule?.id}
          myRuleCodeList={codeList}
          onAddHandler={addHandler}
          onSetChangedCount={handleSetChangedPolicyCont}
        />
      )}
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="از ویرایش این قانون مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleAddMyRule,
          loading: modalsLoading.editButton,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalEdit,
          color: 'red',
        }}
        type="success"
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این قانون مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleDeleteMyRule,
          loading: modalsLoading.deleteButton,
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
