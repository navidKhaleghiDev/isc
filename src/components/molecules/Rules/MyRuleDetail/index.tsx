import { IMyRule } from '@src/services/client/rules/types';
import { NoResult } from '@ui/molecules/NoResult';

import { MyRulePolicies } from './MyRulePolicies';
import { RuleInformation } from '../RuleInformation';

type PropsType = { myRule?: IMyRule };

export function MyRuleDetail({ myRule }: PropsType) {
  return myRule ? (
    <div className="pb-5">
      <RuleInformation
        creator={myRule.creator.email}
        createdDate={myRule.created_at}
        updateDate={myRule.update_at}
        name={myRule.rule_name}
        description={myRule.description}
      />
      <MyRulePolicies myRule={myRule} />
    </div>
  ) : (
    <NoResult />
  );
}
