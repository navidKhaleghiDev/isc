import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES_ID } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { CodeLine } from './CodeLine';
import { TitleMyProduct } from '../TitleMyProduct';
import { myRruleData } from './dataMock';
import { getListCodeFromStr } from './utils';

export function MyRuleDetail() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data, isLoading } = useGet<ResponseSwr<IMyRule>>(
    E_RULES_MY_RULES_ID(id)
  );

  const myRule = data?.data || myRruleData;

  console.log({ myRule });

  getListCodeFromStr(myRule.rule_code);
  const { control } = useForm();

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
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((code: any) => {
            return <CodeLine key={code} />;
          })}
        </>
      </Card>
      <div className="w-full mt-3 flex justify-end">
        <BaseButton label="ثبت" size="sm" />
      </div>
    </>
  );
}
