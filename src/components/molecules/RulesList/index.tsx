import { useState } from 'react';
import { ButtonState } from '@src/pages/Services/Rules/types';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { IProduct } from '@src/services/client/users/types';

import { Modal } from '../Modal';
import { RulesCard } from '../RulesCard';
import { NoResult } from '../NoResult';

type PropsType = {
  buttonState: ButtonState;
};
export function RulesList({ buttonState }: PropsType) {
  const { data: allData, isLoading: isLoadingAllData } = useGet<
    ResponseSwr<IRules[]>
  >(buttonState === 'all' ? E_RULES_LIST : null);

  const { data: suggestData, isLoading: isLoadingSuggestData } = useGet<
    ResponseSwr<IProduct>
  >(buttonState === 'suggest' ? E_USERS_PRODUCT : null);

  const rules = suggestData?.data.recommended_rules || allData?.data || [];

  const [openModal, setOpenModal] = useState(false);
  const handleOnClickAdd = (id: string) => {
    setOpenModal(true);
  };
  return (
    <div className="w-full h-full mt-8">
      {rules.length > 0 ? (
        rules.map((item: IRules) => (
          <RulesCard
            key={item.id}
            onClickAdd={() => handleOnClickAdd(item.id)}
          />
        ))
      ) : (
        <NoResult />
      )}
      <Modal open={openModal} setOpen={setOpenModal} />
    </div>
  );
}
