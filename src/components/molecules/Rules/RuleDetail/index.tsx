import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_RETRIEVE } from '@src/services/client/rules/endpoint';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { getCountDifferenceOrder } from '@src/helper/utils/getCountDifferenceOrder';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { NoResult } from '@ui/molecules/NoResult';
import { toast } from 'react-toastify';
import { API_ADD_RULE } from '@src/services/client/rules';

import { RuleInformation } from '../RuleInformation';
import { IRulePolicyListRef, RulePolicyList } from '../RulePolicyList';

export function RuleDetail() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];
  const rulePolicyListRef = useRef<IRulePolicyListRef>(null);
  const { data, isLoading, mutate } = useGet<ResponseSwr<IRules>>(
    E_RULES_RETRIEVE(id)
  );
  const rule: IRules | undefined = data?.data;
  const slicedCodeList: SliceOrderCodeType[] = getCodeList(rule?.code);
  const [codeList, setCodeList] = useState<SliceOrderCodeType[]>([]);
  useEffect(() => {
    if (getCodeList(rule?.code).length > 0) {
      setCodeList(getCodeList(rule?.code));
    }
  }, [rule?.code]);

  const countDifferenceOrder =
    !!slicedCodeList.length && !!codeList.length
      ? getCountDifferenceOrder(slicedCodeList, codeList)
      : 0;

  const handleAddRule = async () => {
    if (rule) {
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
      await API_ADD_RULE({ id: rule.id, rule_code: ruleCode })
        .then(() => {
          mutate();
          toast.success('با موفقیت اضافه شد');
        })
        .catch((err) => {
          toast.error(err);
        })
        .finally(() => {
          rulePolicyListRef?.current?.toggleModalEdit();
        });
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return rule ? (
    <>
      <RuleInformation
        createdDate={rule.created_at}
        updateDate={rule.updated_at}
        name={rule.name}
        description={rule.description}
      />
      <RulePolicyList
        ref={rulePolicyListRef}
        codeList={codeList}
        setCodeList={setCodeList}
        onRegisterRule={handleAddRule}
        countDifferenceOrder={countDifferenceOrder}
      />
    </>
  ) : (
    <NoResult />
  );
}
