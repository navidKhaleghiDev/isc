import { useLocation } from 'react-router-dom';
import { RulesCodeTemplate } from '@ui/Templates/RulesCode';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_MY_RULES_ID } from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { MyRuleDetail } from '@ui/molecules/Rules/MyRuleDetail';
import { PageBackButton } from '@ui/atoms/BackButton';

export function MyRuleDetailsPage() {
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];

  const { data: dataMyRule, isLoading } = useGet<ResponseSwr<IMyRule>>(
    E_RULES_MY_RULES_ID(id)
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const myRule: IMyRule | undefined = dataMyRule?.data;

  return (
    <RulesCodeTemplate>
      <PageBackButton />
      <MyRuleDetail myRule={myRule} />
    </RulesCodeTemplate>
  );
}
