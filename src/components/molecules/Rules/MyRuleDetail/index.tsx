import { IMyRule } from '@src/services/client/rules/types';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulePolicies } from './MyRulePolicies';

type PropsType = { myRule?: IMyRule };

export function MyRuleDetail({ myRule }: PropsType) {
  return myRule ? (
    <div className="pb-5">
      <MyRulePolicies myRule={myRule} />
    </div>
  ) : (
    <NoResult />
  );
}
