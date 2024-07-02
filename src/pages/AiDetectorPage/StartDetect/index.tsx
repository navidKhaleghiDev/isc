import { useForm } from 'react-hook-form';
import { BaseButton } from '@ui/atoms';
import { useState } from 'react';
import { API_CREATE } from '@src/services/client/ai';
import { toast } from 'react-toastify';

import { LearnerDropDown } from '../LearnerDropDown';
import { IStartDetectorValues } from './types';

export function StartDetect() {
  const { control, handleSubmit } = useForm<IStartDetectorValues>();
  const [loadingButton, setLoadingButton] = useState(false);

  const handelSubmitForm = async (dataForm: IStartDetectorValues) => {
    setLoadingButton(true);
    await API_CREATE(dataForm, 'my_detectioner')
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

  return (
    <form onSubmit={handleSubmit(handelSubmitForm)} className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 lg:col-start-5">
          <LearnerDropDown control={control} />
        </div>

        <div className="col-span-12 flex justify-center">
          <BaseButton
            label="شروع شناسایی"
            className="mt-4"
            loading={loadingButton}
            type="default"
            size="lg"
            submit
          />
        </div>
      </div>
    </form>
  );
}
