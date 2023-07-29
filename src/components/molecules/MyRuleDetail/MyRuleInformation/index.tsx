/* eslint-disable react/no-array-index-key */
import { Card, Typography } from '@ui/atoms';
import { IMyRule } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { CardRuleDetail } from '@ui/molecules/CardRuleDetail';

export function MyRuleInformation({ myRule }: { myRule: IMyRule }) {
  return (
    <div className="grid grid-cols-3 gap-5 mb-16">
      <div>
        <CardRuleDetail
          label="سازنده"
          value={myRule.creator.email}
          className="mt-5"
        />
        <CardRuleDetail
          label="تاریخ ثبت"
          value={persianDateAndNumber(myRule.created_at)}
          className="mt-5"
        />
        <CardRuleDetail
          label="آخرین ویرایش"
          value={persianDateAndNumber(myRule.update_at)}
          className="mt-5"
        />
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
  );
}
