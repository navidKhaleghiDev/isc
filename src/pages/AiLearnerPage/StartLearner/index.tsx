import { useForm } from 'react-hook-form';
import { BaseButton } from '@ui/atoms';
import { useState } from 'react';
import { API_CREATE } from '@src/services/client/ai';
import { toast } from 'react-toastify';
import { convertI2ToAD } from '@ui/atoms/Inputs/DatePicker';

import { ListenerDropDown } from '../ListenerDropDown';
import { IStartLearnerValues } from './types';
import { SetRunTimeDate } from './SetRunTimeDate';
import { CollectButtons, ECollectButtonsValue } from './CollectButtons';

export function StartLearner() {
  const { control, handleSubmit, watch } = useForm<IStartLearnerValues>();
  const [loadingButton, setLoadingButton] = useState(false);
  const [collectButtonsValue, setCollectButtonsValue] =
    useState<ECollectButtonsValue>(ECollectButtonsValue.ALL);

  const handelSubmitForm = async (dataForm: IStartLearnerValues) => {
    setLoadingButton(true);
    await API_CREATE(
      {
        ...dataForm,
        first_record_time: convertI2ToAD(
          dataForm.first_record_time,
          'YYYY-MM-DD'
        ) as string | undefined,
        last_record_time: convertI2ToAD(
          dataForm.last_record_time,
          'YYYY-MM-DD'
        ) as string | undefined,
      },
      'my_learner'
    )
      .then(() => {
        toast.success('با موفقیت ثبت شد.');
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  const listenerId = watch('listener_id');
  return (
    <form onSubmit={handleSubmit(handelSubmitForm)} className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <ListenerDropDown control={control} />
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-between">
          <CollectButtons
            value={collectButtonsValue}
            setValue={setCollectButtonsValue}
          />
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-between">
          {collectButtonsValue === ECollectButtonsValue.PERIOD && (
            <SetRunTimeDate idListener={listenerId} control={control} />
          )}
        </div>

        <div className="col-span-12 flex justify-center">
          <BaseButton
            label="شروع فرآیند یادگیری"
            className="mt-4"
            loading={loadingButton}
            type="default"
            size="lg"
            disabled={
              collectButtonsValue === ECollectButtonsValue.PERIOD
                ? !listenerId
                : false
            }
            submit
          />
        </div>
      </div>
    </form>
  );
}
