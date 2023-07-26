import { IMyRule } from '@src/services/client/rules/types';

import { NoResult } from '../NoResult';
import { MyRuleInformation } from './MyRuleInformation';
import { MyRulePolicies } from './MyRulePolicies';

type PropsType = { myRule?: IMyRule };

export function MyRuleDetail({ myRule }: PropsType) {
  console.count('MyRuleDetail');

  return myRule ? (
    <div className="pb-5">
      <MyRuleInformation myRule={myRule} />
      <MyRulePolicies myRule={myRule} />
    </div>
  ) : (
    <NoResult />
  );
}
