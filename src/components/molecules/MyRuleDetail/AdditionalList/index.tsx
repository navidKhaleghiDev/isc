/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { CodeLineRule } from '@ui/molecules/RuleDetail/CodeLineRule';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_RETRIEVE } from '@src/services/client/rules/endpoint';
import { ChangeEvent, useEffect, useState } from 'react';
import { getCodeListDifference, getDifference } from './utils';
import { PropsAdditionalList } from './types';
import { CodeLine } from '../CodeLine';
import { ruleDataList } from '../dataMock';

export function AdditionalList({
  onAddHandler,
  myRuleId,
  myRuleCodeList,
  onSetChangedCount,
}: PropsAdditionalList) {
  const [isSetAdditional, setIsSetAdditional] = useState(false);
  const [codeList, setCodeList] = useState<SliceOrderCodeType[]>([]);
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
      setCodeList(changedList);
      onSetChangedCount(`${changedList.length}`);
    }
    // console.log({ changedList: getCodeList(rule?.code) });
  }, [myRuleCodeList, onSetChangedCount, rule]);

  // const { isAdded, isRemoved, changedList } = getCodeListDifference({
  //   oldList: myRuleCodeList,
  //   newList: getCodeList(rule?.code),
  // });

  // const { added, removed, edited } = getDifference(oldList, newList);
  // useEffect(() => {
  //   onSetChangedCount(`${changedList.length}`);
  // }, [changedList.length, onSetChangedCount]);

  // console.count('AdditionalList');
  // console.log({ newCodeList });
  // console.log({ added, removed, edited });

  if (!rule) {
    return null;
  }

  // const compairedList = comparCodeList(newList, oldList, isSamePolicy);
  // console.log({ compairedList });

  const handleOnClickAddAdditionalPolicies = () => {
    setIsSetAdditional(true);
    onAddHandler(getCodeList(rule?.code));
  };

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

  return codeList?.length > 0 ? (
    <div className="mt-5">
      <Card
        className="p-4 max-h-[24rem] overflow-y-auto"
        color="neutral"
        border
        borderColor="teal"
      >
        <div className="flex items-center justify-between">
          <Typography size="body2" color="yellow">
            تغییرات زیر جدید می باشد
            {/* {`سیاست های زیر ${
              !isAdded && !isRemoved ? 'تغییر داده' : isAdded ? 'اضافه' : 'کم'
            } شده است.`} */}
          </Typography>
          <BaseButton
            label="اعمال تغییرات"
            size="sm"
            type="secondary"
            className="w-48"
            onClick={handleOnClickAddAdditionalPolicies}
          />
        </div>
        {codeList.map((code: SliceOrderCodeType, index: number) => {
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
