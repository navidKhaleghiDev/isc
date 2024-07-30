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
 * @param {RuleInformationProps} props - The props for the RuleInformation component.
 * @param {string} [creator] - Includes the rule creator's information.
 * @param {string} [createdDate] - Includes the rule create date information.
 * @param {string} [updateDate] - Includes the rule update date information.
 * @param {string} name - Include the rule name.
 * @param {string} description - Include the rule description.
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
      <div className="flex  md:flex-col-reverse gap-5 md:gap-0 items-center justify-between">
        {updateDate && (
          <CardRuleDetail
            label="آخرین ویرایش"
            value={persianDateAndNumber(updateDate)}
            className=""
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
        className=" self-end md:self-start mt-11"
      >
        {name}
      </Typography>
    </div>
  );
}

// <div className="grid grid-cols-3 gap-5 mb-16">
//   <div>
//     {creator && (
//       <CardRuleDetail label="سازنده" value={creator} className="mt-5" />
//     )}
//     {createdDate && (
//       <CardRuleDetail
//         label="تاریخ ثبت"
//         value={persianDateAndNumber(createdDate)}
//         className="mt-5"
//       />
//     )}
//     {updateDate && (
//       <CardRuleDetail
//         label="آخرین ویرایش"
//         value={persianDateAndNumber(updateDate)}
//         className="mt-5"
//       />
//     )}
//   </div>
//   <div className="col-span-2 flex flex-col justify-start items-end">
//     <Typography color="neutral" size="h4">
//       {name}
//     </Typography>
//     <Card color="neutral" className="px-2 w-full h-full">
//       <Typography
//         size="body2"
//         className="text-neutral-500 w-full text-left"
//       >
//         {/* {myRule.description} */}
//         {description}
//       </Typography>
//     </Card>
//   </div>
// </div>;
