import { Card, Typography } from '@ui/atoms';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { CardRuleDetail } from '../CardRuleDetail';

type RuleInformationProps = {
  creator?: string;
  createdDate?: string;
  updateDate?: string;
  name: string;
  description: string;
};

export function RuleInformation({
  creator,
  createdDate,
  updateDate,
  name,
  description,
}: RuleInformationProps) {
  return (
    <div className="grid grid-cols-3 gap-5 mb-16">
      <div>
        {creator && (
          <CardRuleDetail label="سازنده" value={creator} className="mt-5" />
        )}
        {createdDate && (
          <CardRuleDetail
            label="تاریخ ثبت"
            value={persianDateAndNumber(createdDate)}
            className="mt-5"
          />
        )}
        {updateDate && (
          <CardRuleDetail
            label="آخرین ویرایش"
            value={persianDateAndNumber(updateDate)}
            className="mt-5"
          />
        )}
      </div>
      <div className="col-span-2 flex flex-col justify-start items-end">
        <Typography color="neutral" size="h4">
          {name}
        </Typography>
        <Card color="neutral" className="px-2 w-full h-full">
          <Typography
            size="body2"
            className="text-neutral-500 w-full text-left"
          >
            {/* {myRule.description} */}
            {description}
          </Typography>
        </Card>
      </div>
    </div>
  );
}
