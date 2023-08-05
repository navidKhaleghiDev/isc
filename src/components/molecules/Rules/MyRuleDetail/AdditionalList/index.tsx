/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import { ChangeEvent, useEffect, useState } from 'react';
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_RETRIEVE } from '@src/services/client/rules/endpoint';
import { Modal } from '@ui/molecules/Modal';
import { getCodeListDifference } from './utils';
import { PropsAdditionalList } from './types';
import { CodeLine } from '../CodeLine';
// import { ruleDataList } from '../dataMock';

type AdditionalStateType = {
  codeList: SliceOrderCodeType[];
  removedList: SliceOrderCodeType[];
  isRemoved: boolean;
};

const initAdditionalState = {
  codeList: [],
  removedList: [],
  isRemoved: false,
};

export function AdditionalList({
  onAddHandler,
  myRuleId,
  myRuleCodeList,
}: PropsAdditionalList) {
  const [isSetAdditional, setIsSetAdditional] = useState(false);
  const [openModalSetChanged, setOpenModalSetChanged] = useState(false);

  const [additional, setAdditional] =
    useState<AdditionalStateType>(initAdditionalState);

  const { data: dataRule } = useGet<ResponseSwr<IRules>>(
    myRuleId && !isSetAdditional ? E_RULES_RETRIEVE(myRuleId) : null
  );

  const rule: IRules | undefined = dataRule?.data;
  useEffect(() => {
    if (rule) {
      const { isRemoved, changedList, removedList } = getCodeListDifference({
        oldList: myRuleCodeList,
        newList: getCodeList(rule?.code),
      });

      setAdditional({ codeList: changedList, isRemoved, removedList });
    }
  }, [myRuleCodeList, rule]);

  if (!rule) {
    return null;
  }

  const handleOnClickAddAdditionalPolicies = () => {
    setIsSetAdditional(true);
    const uniqueArray: SliceOrderCodeType[] = [];
    getCodeList(rule?.code).forEach((newP) => {
      const updatedOrder = additional.codeList.find(
        (additionalP) =>
          additionalP.order !== newP.order && additionalP.code === newP.code
      );

      const beforeSet = myRuleCodeList.find(
        (beforeP) => beforeP.code === newP.code
      );

      if (beforeSet) {
        // if additional was before code with new order
        uniqueArray.push(beforeSet);
        return;
      }

      if (updatedOrder) {
        // if additional with new code and user changed order in additional section
        uniqueArray.push(updatedOrder);
        return;
      }
      uniqueArray.push(newP);
    });
    onAddHandler(uniqueArray);
  };

  const handleOnChangeOrder = (
    { target: { value } }: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newCodeList = additional.codeList.slice();
    newCodeList[index].order = value;
    setAdditional({
      ...additional,
      codeList: newCodeList,
      isRemoved: false,
    });
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
            {`${additional.codeList.length} سیاست زیر ${
              !additional.isRemoved ? 'اضافه' : 'کم'
            } و یا تغییر یافته است.`}
          </Typography>
          <BaseButton
            label="اعمال تغییرات"
            size="sm"
            type="secondary"
            className="w-48"
            onClick={() => setOpenModalSetChanged(true)}
          />
        </div>
        {additional.codeList.map((code: SliceOrderCodeType, index: number) => {
          return (
            <CodeLine
              id={`additional-${index}`}
              key={`${index}_${code.order}`}
              code={code}
              onChangeOrder={(event: ChangeEvent<HTMLSelectElement>) =>
                handleOnChangeOrder(event, index)
              }
            />
          );
        })}
      </Card>
      <Modal
        open={openModalSetChanged}
        setOpen={setOpenModalSetChanged}
        type="error"
        title="از اعمال این تغییرات مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleOnClickAddAdditionalPolicies,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: () => setOpenModalSetChanged(false),
          color: 'red',
        }}
      />
    </div>
  ) : null;
}
