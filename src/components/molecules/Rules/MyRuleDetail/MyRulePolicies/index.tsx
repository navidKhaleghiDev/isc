import { useLocation, useNavigate } from 'react-router-dom';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { useState } from 'react';
import {
  API_DELETE_MY_RULE,
  API_UPDATE_MY_RULE,
} from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { getCountDifferenceOrder } from '@src/helper/utils/getCountDifferenceOrder';

import { AdditionalList } from '../AdditionalList';
import { RulePolicyList } from '../../RulePolicyList';

type MyRulePoliciesProps = {
  myRule: IMyRule;
};

export function MyRulePolicies({ myRule }: MyRulePoliciesProps) {
  const navigate = useNavigate();
  const slicedCodeList: SliceOrderCodeType[] = getCodeList(myRule?.rule_code);
  const [codeList, setCodeList] =
    useState<SliceOrderCodeType[]>(slicedCodeList);
  const [openModalDelete, setOpenModalDelete] = useState(false);
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

  const countDifferenceOrder = getCountDifferenceOrder(
    slicedCodeList,
    codeList
  );

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

  return (
    <>
      <RulePolicyList
        codeList={codeList}
        setCodeList={setCodeList}
        modalsLoading={modalsLoading}
        onDeleteRule={handleDeleteMyRule}
        onRegisterRule={handleAddMyRule}
        countDifferenceOrder={countDifferenceOrder}
      />

      {state?.isUpdated && (
        <AdditionalList
          myRuleId={myRule?.id}
          myRuleCodeList={codeList}
          onAddHandler={addHandler}
        />
      )}
    </>
  );
}
