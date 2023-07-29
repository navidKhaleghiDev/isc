import { useLocation } from 'react-router-dom';
import { RulesCodeTemplate } from '@ui/Templates/RulesCode';
import { MyRuleDetail } from '@ui/molecules/MyRuleDetail';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES_ID } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';

export function MyRuleDetailsPage() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data: dataMyRule } = useGet<ResponseSwr<IMyRule>>(
    E_RULES_MY_RULES_ID(id)
  );

  const myRule: IMyRule | undefined = dataMyRule?.data;

  return (
    <RulesCodeTemplate>
      <MyRuleDetail myRule={myRule} />
    </RulesCodeTemplate>
  );
}
