import { IMyRule } from '@src/services/client/rules/types';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulePolicies } from './MyRulePolicies';

type TMyRuleDetailProp = { myRule?: IMyRule };

/**
 * MyRuleDetail component
 *
 * This component displays the details of a specific rule if provided. If no rule is provided,
 * it shows a "No Result" message.
 *
 * @component
 *
 * @param {IMyRule} [props.myRule] - The rule details to be displayed.
 *
 * @returns {JSX.Element} The rendered MyRuleDetail component.
 */

export function MyRuleDetail({ myRule }: TMyRuleDetailProp): JSX.Element {
  return myRule ? (
    <div className="pb-5">
      <MyRulePolicies myRule={myRule} />
    </div>
  ) : (
    <NoResult />
  );
}
