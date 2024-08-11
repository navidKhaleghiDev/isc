import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { Typography } from '@ui/atoms';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { CardRuleDetail } from '../CardRuleDetail';

type RuleInformationProps = {
  updateDate?: string;
  name: string;
  codeList: SliceOrderCodeType[];
  countDifferenceOrder: number;
};

/**
 * RuleInformation Component
 *
 * This component renders rule detail section in the my-product/my-rule.
 *
 * @component
 *
 * @param {string} [updateDate] - Includes the rule update date information.
 * @param {string} [countDifferenceOrder] - Include the rule policy that has changed overall.
 * @param {string} [name] - Include the rule name.
 * @param {string} [codeList] - Include the code list param.
 *
 *
 * @returns {JSX.Element} The returned rule information section
 */

export function RuleInformation({
  updateDate,
  name,
  countDifferenceOrder,
  codeList,
}: RuleInformationProps): JSX.Element {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="flex md:flex-col-reverse gap-5 md:gap-0 items-center justify-between">
        {updateDate && (
          <CardRuleDetail
            label="آخرین ویرایش"
            value={persianDateAndNumber(updateDate)}
          />
        )}
        {codeList && (
          <CardRuleDetail
            label="تعداد سیاست ها"
            value={codeList.length}
            className=""
          />
        )}

        <CardRuleDetail
          label="تغییرات داده شده"
          value={countDifferenceOrder}
          className=""
        />
      </div>
      <Typography
        color="neutral_dark"
        size="body1"
        weight="bold"
        className="self-end md:self-start"
      >
        {name}
      </Typography>
    </div>
  );
}
