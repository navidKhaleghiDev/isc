import { useForm } from 'react-hook-form';
import { BaseButton } from '@ui/atoms';
import { useState } from 'react';
import { API_CREATE_MY_LISTENERS } from '@src/services/client/ai';
import { toast } from 'react-toastify';

import { ListenerDropDown } from '../ListenerDropDown';
import { IStartListenerValues } from './types';
import { SetRunTimeDate } from './SetRunTimeDate';
import { CollectButtons, ECollectButtonsValue } from './CollectButtons';

export function StartLearner() {
  const { control, handleSubmit, watch } = useForm<IStartListenerValues>();
  const [loadingButton, setLoadingButton] = useState(false);
  const [collectButtonsValue, setCollectButtonsValue] =
    useState<ECollectButtonsValue>(ECollectButtonsValue.ALL);

  const handelSubmitForm = async (dataForm: IStartListenerValues) => {
    setLoadingButton(true);
    await API_CREATE_MY_LISTENERS(dataForm)
      .then(() => {
        toast.success('با موفقیت اضافه شد.');
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setLoadingButton(false);
      });
  };

  const listenerId = watch('listener');
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
            label="لیست مدل های آموزش دیده"
            className="mt-4"
            loading={loadingButton}
            type="default"
            size="lg"
            disabled={!listenerId}
            submit
          />
        </div>
      </div>
    </form>
  );
}
