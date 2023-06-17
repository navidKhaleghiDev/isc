import { useState } from 'react';
import { ButtonState } from '@src/pages/Services/Rules/types';
import { useGet } from '@src/services/http/httpClient';
import { IRules, ResponseSwr } from '@src/services/client/rules/types';
import { E_RULES_LIST } from '@src/services/client/rules/endpoint';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { IProduct } from '@src/services/client/users/types';
import { API_ADD_RULE } from '@src/services/client/rules';
import { toast } from 'react-toastify';

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
  const [ruleId, setRuleId] = useState<string>('');

  const handleOnClickAdd = (id: string) => {
    setRuleId(id);
    setOpenModal(true);
  };

  const handleRequestAdd = async () => {
    setOpenModal(false);

    await API_ADD_RULE({ id: ruleId })
      .then(() => {
        toast.success('با موفقیت اضافه شد');
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
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
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        type="success"
        title="آیا مطمين هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleRequestAdd,
        }}
        buttonTow={{
          color: 'red',
          label: 'خیر',
          onClick: () => setOpenModal(false),
        }}
      />
    </div>
  );
}
