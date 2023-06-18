/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES_ID } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, useEffect, useState } from 'react';
import { CodeLine } from './CodeLine';
import { TitleMyProduct } from '../TitleMyProduct';
import { myRuleData } from './dataMock';

export function MyRuleDetail() {
  const [codeList, setCodeList] = useState<SliceOrderCodeType[] | null>(null);
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data } = useGet<ResponseSwr<IMyRule>>(E_RULES_MY_RULES_ID(id));
  const myRule = data?.data || myRuleData;

  useEffect(() => {
    setCodeList(getCodeList(myRule.rule_code));
  }, [myRule]);

  const handleOnChangeOrder = (
    { target: { value } }: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    console.log({ value, index });
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-5 mb-16">
        <div>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="سازنده" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {myRule.creator.email}
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="تاریخ ثبت" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(myRule.created_at)}
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 ">
            <TitleMyProduct title="آخرین ویرایش" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(myRule.update_at)}
            </Typography>
          </Card>
        </div>
        <div className="col-span-2 flex flex-col justify-start items-end">
          <Typography color="neutral" size="h4">
            {myRule.rule_name}
          </Typography>
          <Card color="neutral" className="px-2 w-full h-full">
            <Typography
              size="body2"
              className="text-neutral-500 w-full text-left"
            >
              {myRule.description}
            </Typography>
          </Card>
        </div>
      </div>

      <Card color="neutral" className="p-8 h-[41rem] overflow-y-auto">
        {codeList &&
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
          })}
      </Card>
      <div className="w-full mt-3 flex justify-end">
        <BaseButton label="ثبت" size="sm" />
      </div>
    </>
  );
}
