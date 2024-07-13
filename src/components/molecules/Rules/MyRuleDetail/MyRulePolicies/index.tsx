import { useLocation, useNavigate } from 'react-router-dom';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { useRef, useState } from 'react';
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
import { IRulePolicyListRef, RulePolicyList } from '../../RulePolicyList';

type MyRulePoliciesProps = {
  myRule: IMyRule;
};

/**
 * MyRulePolicies Component
 *
 * This component renders and manages a user's rule policies, providing functionalities to delete and update rules.
 *
 * @component
 *
 * @param {Object} props - The props for the MyRulePolicies component.
 * @param {IMyRule} props.myRule - The rule object containing rule details.
 *
 * @returns {JSX.Element} The rendered MyRulePolicies component.
 */

export function MyRulePolicies({ myRule }: MyRulePoliciesProps) {
  const navigate = useNavigate();
  const slicedCodeList: SliceOrderCodeType[] = getCodeList(myRule?.rule_code);
  const rulePolicyListRef = useRef<IRulePolicyListRef>(null);

  const [codeList, setCodeList] =
    useState<SliceOrderCodeType[]>(slicedCodeList);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const { state } = useLocation();

  const { mutate: mutateMyRules } =
    useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

  const countDifferenceOrder =
    !!slicedCodeList.length && !!codeList.length
      ? getCountDifferenceOrder(slicedCodeList, codeList)
      : 0;

  /**
   * Deletes the user's rule and updates the state.
   * @async
   * @function handleDeleteMyRule
   * @returns {Promise<void>}
   */

  const handleDeleteMyRule = async () => {
    rulePolicyListRef?.current?.setModalsLoadingParent({
      deleteButton: true,
      editButton: false,
    });

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
        rulePolicyListRef?.current?.setModalsLoadingParent({
          deleteButton: false,
          editButton: false,
        });
        rulePolicyListRef?.current?.toggleModalDelete();
      });
  };

  /**
   * Updates the user's rule and updates the state.
   * @async
   * @function handleAddMyRule
   * @returns {Promise<void>}
   */

  const handleAddMyRule = async () => {
    rulePolicyListRef?.current?.setModalsLoadingParent({
      deleteButton: false,
      editButton: true,
    });

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
        rulePolicyListRef?.current?.setModalsLoadingParent({
          deleteButton: false,
          editButton: false,
        });
        rulePolicyListRef?.current?.toggleModalEdit();
      });
  };

  /**
   * Handles adding a new rule to the code list.
   * @function addHandler
   * @param {SliceOrderCodeType[]} additional - The new codes to be added.
   */

  const addHandler = (additional: SliceOrderCodeType[]) => {
    setCodeList(additional);
  };

  return (
    <>
      <RulePolicyList
        ref={rulePolicyListRef}
        codeList={codeList}
        setCodeList={setCodeList}
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
