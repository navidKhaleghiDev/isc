import { useGet } from '@src/services/http/httpClient';
import {
  IMyRule,
  IResponseRules,
  IRules,
  ResponseSwr,
} from '@src/services/client/rules/types';
import { useEffect, useState } from 'react';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';

export function useCheckRuleVersion(myRules?: IMyRule[]): IMyRule[] {
  const { data } = useGet<ResponseSwr<IResponseRules>>(E_RULES_LIST({}));

  const [checkedList, setCheckedList] = useState<IMyRule[]>([]);
  const rules: IRules[] | null =
    data && Array.isArray(data?.data?.results) ? data?.data?.results : null;

  useEffect(() => {
    if (myRules && rules) {
      const newList = myRules.map((myRule: IMyRule) => {
        const myRuleInRules = rules.find((rule: IRules) => {
          // console.log({ ruleId: rule.id, myRuleId: myRule.id });

          return rule.id === myRule.id;
        });
        // console.log({ myRuleInRules });

        if (
          myRuleInRules?.version &&
          myRuleInRules.version !== myRule.version
        ) {
          return { ...myRule, isUpdated: true };
        }
        return myRule;
      });
      setCheckedList(newList);
    }
  }, [rules, myRules]);

  return checkedList;
}
