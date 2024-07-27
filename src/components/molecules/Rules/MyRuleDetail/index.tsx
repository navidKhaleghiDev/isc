import { IMyRule } from '@src/services/client/rules/types';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulePolicies } from './MyRulePolicies';
// import { RuleInformation } from '../RuleInformation';

type PropsType = { myRule?: IMyRule };

export function MyRuleDetail({ myRule }: PropsType) {
  return myRule ? (
    <div className="pb-5">
      {/* <RuleInformation
        updateDate={myRule.update_at}
        name={myRule.rule_name}
        codeList={myRule.}
      /> */}
      <MyRulePolicies myRule={myRule} />
    </div>
  ) : (
    <NoResult />
  );
}
