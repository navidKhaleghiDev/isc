/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Typography } from '@ui/atoms';
import { useLocation } from 'react-router-dom';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_RETRIEVE } from '@src/services/client/rules/endpoint';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { CodeLineRule } from './CodeLineRule';
import { TitleMyProduct } from '../TitleMyProduct';
import { ruleData } from './dataMock';

export function RuleDetail() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data } = useGet<ResponseSwr<IRules>>(E_RULES_RETRIEVE(id));

  const rule = data?.data || ruleData;

  const codes = getCodeList(rule.code);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 mb-16">
        <div className="flex flex-col justify-between">
          <Card color="neutral" className="flex items-center px-4">
            <TitleMyProduct title="تاریخ ثبت" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(rule.created_at)}
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 ">
            <TitleMyProduct title="آخرین ویرایش" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(rule?.updated_at)}
            </Typography>
          </Card>
        </div>
        <div className="col-span-2 flex flex-col justify-start items-end">
          <Typography color="neutral" size="h4">
            {rule.name}
          </Typography>
          <Card color="neutral" className="px-2 w-full h-full">
            <Typography
              size="body2"
              className="text-neutral-500 w-full text-left"
            >
              {rule.description}
            </Typography>
          </Card>
        </div>
      </div>

      <Card color="neutral" className="p-4 max-h-[24rem] overflow-y-auto">
        {codes &&
          codes.map((code: SliceOrderCodeType, index: number) => {
            return <CodeLineRule key={`${index}_${code.order}`} code={code} />;
          })}
      </Card>
      {codes && (
        <Typography
          className="mt-4 bg-neutral-100 p-2 rounded-md w-48"
          color="teal"
        >
          تعداد سیاست های قانون: {Object.entries(codes).length}
        </Typography>
      )}
    </>
  );
}
