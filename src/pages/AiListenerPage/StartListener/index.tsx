import { useForm } from 'react-hook-form';
import { BaseButton, BaseInput } from '@ui/atoms';
import { regexPattern } from '@ui/atoms/Inputs';
import { useState } from 'react';
import { API_CREATE_MY_LISTENERS } from '@src/services/client/ai';
// import { DatePicker } from '@ui/atoms/Inputs/DatePicker';
import { toast } from 'react-toastify';

import { ProtocolDropDown } from '../ProtocolDropDown';
import { IStartListenerValues } from './types';

export function StartListener() {
  const { control, handleSubmit } = useForm<IStartListenerValues>();
  const [loadingButton, setLoadingButton] = useState(false);

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

  return (
    <form onSubmit={handleSubmit(handelSubmitForm)} className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <ProtocolDropDown control={control} />
        </div>

        <BaseInput
          fullWidth
          control={control}
          placeholder="وارد کنید"
          label="رابط"
          rules={{
            required: regexPattern.required,
          }}
          id="interface"
          name="interface"
          className="col-span-12 lg:col-span-4"
          startIcon="ph:x"
          endIcon="ph:x"
        />
        <BaseInput
          fullWidth
          control={control}
          placeholder="وارد کنید"
          label="پورت"
          rules={{
            required: regexPattern.required,
            pattern: regexPattern.numbers,
          }}
          id="port"
          name="port"
          className="col-span-12 lg:col-span-4"
        />
        {/* <div className="col-start-1 col-span-12 lg:col-span-4 lg:col-start-5 gap-4 flex justify-between">
          <BaseInput
            control={control}
            placeholder="وارد کنید"
            label="پورت"
            type="time"
            id="startTime"
            name="startTime"
            size="fullWidth"
            className="w-36"
          />
          <BaseInput
            control={control}
            placeholder="وارد کنید"
            label="پورت"
            type="time"
            id="endTime"
            name="endTime"
            size="fullWidth"
            className="w-36"
          />
        </div> */}
        <div className="col-span-12 lg:col-span-4 gap-8 flex justify-between">
          <BaseInput
            control={control}
            placeholder="به روز"
            label="زمان آنالیز"
            rules={{
              required: regexPattern.required,
              // pattern: regexPattern.numbers,
            }}
            type="number"
            id="days"
            name="days"
            size="freeWidth"
            min={1}
            max={365}
            fullWidth
          />
          <BaseInput
            control={control}
            placeholder="به ساعت"
            label=" "
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.numbers,
            }}
            min={0}
            max={24}
            type="number"
            id="hours"
            name="hours"
            fullWidth
          />
        </div>
        {/* <div className="col-span-12 lg:col-span-4 flex justify-between">
          <DatePicker
            control={control}
            label="تاریخ شروع"
            placeholder="2023.09.22"
            id="startData"
            name="startDate"
          />
          <DatePicker
            control={control}
            label="تاریخ پایان"
            placeholder="2023.09.22"
            id="endData"
            name="endDate"
            startIcon="ph:x"
          />
        </div> */}

        <div className="col-span-12 flex justify-center">
          <BaseButton
            label="شروع فرآیند آنالیز داده"
            className="mt-4"
            loading={loadingButton}
            type="default"
            size="lg"
            submit
            // fullWidth
          />
        </div>
      </div>
    </form>
  );
}
