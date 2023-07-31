import { useGet } from '@src/services/http/httpClient';
import {
  IMyRule,
  IResponseRules,
  IRules,
  ResponseSwr,
} from '@src/services/client/rules/types';
import { useEffect, useMemo, useState } from 'react';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';
import { IProduct } from '@src/services/client/users/types';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';

export function useCheckRuleVersion(myRules?: IMyRule[]): IMyRule[] {
  const { data } = useGet<ResponseSwr<IResponseRules>>(
    E_RULES_LIST({
      pageSize: 10000,
      page: 1,
    })
  );

  const { data: productData } = useGet<ResponseSwr<IProduct>>(E_USERS_PRODUCT);
  const [checkedList, setCheckedList] = useState<IMyRule[]>([]);
  const rules: IRules[] | null =
    data && Array.isArray(data?.data?.results) ? data?.data?.results : null;

  const recommendedRules: IRules[] | null =
    productData && Array.isArray(productData?.data.recommended_rules)
      ? productData?.data.recommended_rules
      : null;

  const mergedRules = useMemo(() => {
    return rules && recommendedRules
      ? [
          ...rules,
          ...recommendedRules.filter(
            (obj2) => !rules.some((obj1) => obj1.id === obj2.id)
          ),
        ]
      : null;
  }, [recommendedRules, rules]);

  useEffect(() => {
    if (myRules && mergedRules) {
      const newList = myRules.map((myRule: IMyRule) => {
        const myRuleInRules = mergedRules.find(
          (rule: IRules) => rule.id === myRule.id
        );
        if (
          myRuleInRules?.version &&
          myRule?.version &&
          myRuleInRules.version !== myRule.version
        ) {
          return { ...myRule, isUpdated: true };
        }
        return myRule;
      });
      setCheckedList(newList);
    }
  }, [mergedRules, myRules]);

  return checkedList;
}
