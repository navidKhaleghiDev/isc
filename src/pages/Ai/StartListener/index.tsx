import { useForm } from 'react-hook-form';
import { BaseButton, BaseInput } from '@ui/atoms';
import { regexPattern } from '@ui/atoms/Inputs';
import { useState } from 'react';
import { DatePicker } from '@ui/atoms/Inputs/DatePicker';

import { ProtocolDropDown } from '../ProtocolDropDown';
import { IStartListenerValues } from './types';

export function StartListener() {
  const { control, handleSubmit } = useForm<IStartListenerValues>();
  const [loadingButton, setLoadingButton] = useState(false);
  const handelSubmitForm = async (data: IStartListenerValues) => {
    console.log({ data });

    // setLoadingButton(true);
    // await API_USERS_LOGIN({ email, password })
    //   .then(({ data }) => {
    //     http.setAuthHeader(data.access_token, data.refresh_token);
    //     setUser(data);
    //     if (remember_me) {
    //       localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, data.refresh_token);
    //     }
    //     if (data.force_change) {
    //       // user login as first time
    //       onChangeStep(ELoginStep.CHANGE_PASSWORD);
    //     } else if (data.is_authenticated) {
    //       // user is authenticated
    //       if (!data.device_serial) {
    //         // user not have device serial
    //         if (data.is_admin || data.is_superuser) {
    //           onChangeStep(ELoginStep.REGISTER_SERIAL_DEVICE);
    //         } else {
    //           getProfile();
    //         }
    //       } else {
    //         // login is ok
    //         getProfile();
    //       }
    //     } else {
    //       onChangeStep(ELoginStep.AUTHENTICATION);
    //     }
    //   })
    //   .catch((err) => {
    //     setError(err);
    //   })
    //   .finally(() => {
    //     setLoadingButton(false);
    //   });
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
        <div className="col-start-1 col-span-12 lg:col-span-4 lg:col-start-5 gap-4 flex justify-between">
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
        </div>
        <div className="col-span-12 lg:col-span-4 flex justify-between">
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
        </div>

        <div className="col-span-12 flex justify-center">
          <BaseButton
            label="شروع فرآیند مشاهده داده"
            className="mt-8"
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
