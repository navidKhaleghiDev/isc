/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_RETRIEVE } from '@src/services/client/rules/endpoint';
import { ChangeEvent, useEffect, useState } from 'react';
import { getCodeListDifference } from './utils';
import { PropsAdditionalList } from './types';
import { CodeLine } from '../CodeLine';
import { ruleDataList } from '../dataMock';

type AdditionalStateType = {
  codeList: SliceOrderCodeType[];
  isAdded: boolean;
  isRemoved: boolean;
};

const initAdditionalState = {
  codeList: [],
  isAdded: false,
  isRemoved: false,
};

export function AdditionalList({
  onAddHandler,
  myRuleId,
  myRuleCodeList,
  onSetChangedCount,
}: PropsAdditionalList) {
  const [isSetAdditional, setIsSetAdditional] = useState(false);
  const [additional, setAdditional] =
    useState<AdditionalStateType>(initAdditionalState);
  const { data: dataRule } = useGet<ResponseSwr<IRules>>(
    myRuleId && !isSetAdditional ? E_RULES_RETRIEVE(myRuleId) : null
  );
  const rule: IRules | undefined = dataRule?.data;

  useEffect(() => {
    if (rule) {
      const { isAdded, isRemoved, changedList } = getCodeListDifference({
        oldList: myRuleCodeList,
        newList: ruleDataList,
        // newList: getCodeList(rule?.code),
      });
      setAdditional({ codeList: changedList, isAdded, isRemoved });
      onSetChangedCount(`${changedList.length}`);
    }
  }, [myRuleCodeList, onSetChangedCount, rule]);

  if (!rule) {
    return null;
  }

  const handleOnClickAddAdditionalPolicies = () => {
    setIsSetAdditional(true);
    // onAddHandler(getCodeList(rule?.code));
    onAddHandler(ruleDataList);
  };

  const handleOnChangeOrder = (
    { target: { value } }: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    if (additional.codeList) {
      const newCodeList = additional.codeList.slice();
      newCodeList[index].order = value;
      setAdditional({
        codeList: newCodeList,
        isAdded: false,
        isRemoved: false,
      });
    }
  };

  return additional.codeList?.length > 0 ? (
    <div className="mt-5">
      <Card
        className="p-4 max-h-[24rem] overflow-y-auto"
        color="neutral"
        border
        borderColor="teal"
      >
        <div className="flex items-center justify-between">
          <Typography size="body2" color="yellow">
            {`سیاست های زیر ${
              additional.isAdded ? 'اضافه' : 'کم'
            } و یا تغییر یافته است.`}
          </Typography>
          <BaseButton
            label="اعمال تغییرات"
            size="sm"
            type="secondary"
            className="w-48"
            onClick={handleOnClickAddAdditionalPolicies}
          />
        </div>
        {additional.codeList.map((code: SliceOrderCodeType, index: number) => {
          return (
            <CodeLine
              key={`${index}_${code.order}`}
              code={code}
              onChangeOrder={(event: ChangeEvent<HTMLSelectElement>) =>
                handleOnChangeOrder(event, index)
              }
            />
          );
        })}
      </Card>
    </div>
  ) : null;
}
