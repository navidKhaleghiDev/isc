import { useState } from 'react';
import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { Divider } from '@ui/atoms/Divider';

import { IRulesLogs } from '@src/services/client/rules/types';
import {
  API_RULES_LOGS_CREATE,
  API_RULES_LOGS_UPDATE,
} from '@src/services/client/rules';
import useSWR from 'swr';
import { IServerResponse } from '@src/types/services';
import { E_RULES_LOGS } from '@src/services/client/rules/endpoint';
import { http } from '@src/services/http';

function TitleSection({ label }: { label: string }) {
  return (
    <Typography
      color="neutral"
      size="h5"
      className="w-full my-4 col-span-12 text-left uppercase"
    >
      {label}
    </Typography>
  );
}

export function LogsSetting() {
  const [loadingButton, setLoadingButton] = useState(false);
  // const [loading, setLoading] = useState(true);

  const { data, isLoading } = useSWR<IServerResponse<IRulesLogs[]>>(
    E_RULES_LOGS,
    http.fetcherSWR,
    {
      revalidateOnFocus: false,
      errorRetryCount: 0,
    }
  );
  const myRulesLogs: IRulesLogs | undefined = data?.data[0];

  const { control, handleSubmit, getValues } = useForm<IRulesLogs>({
    mode: 'onChange',
    defaultValues: {
      id: myRulesLogs?.id,
      log_server_host: myRulesLogs?.log_server_host,
      log_server_port: myRulesLogs?.log_server_port,
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleOnSubmit = async (dataForm: IRulesLogs) => {
    setLoadingButton(true);

    if (dataForm?.id) {
      // update
      await API_RULES_LOGS_UPDATE(dataForm)
        .then(() => {
          toast.success('با موفقیت بروزرسانی شد');
        })
        .catch((err) => {
          toast.error(err);
        })
        .finally(() => setLoadingButton(false));
      return;
    }
    // add new product
    await API_RULES_LOGS_CREATE(dataForm)
      .then(() => {
        toast.success('با موفقیت ذخیره شد');
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => setLoadingButton(false));
  };

  return (
    <>
      <TitleSection label="log server" />
      <Divider />
      <form
        className="w-full flex flex-col items-center justify-between"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <div className="grid w-full grid-cols-12 gap-16 mt-4" dir="ltr">
          <div className="col-span-4">
            <BaseInput
              id="log_server_host"
              name="log_server_host"
              rules={{
                required: regexPattern.required,
                pattern: regexPattern.ip,
              }}
              control={control}
              label="log server host"
              placeholder="192.168.1.1"
              ltrLabel
              fullWidth
            />
          </div>
          <div className="col-span-4">
            <BaseInput
              id="log_server_port"
              name="log_server_port"
              rules={{
                required: regexPattern.required,
                // maxLength: {
                //   value: 5,
                //   message: "Input cannot exceed 10 characters",
                // },
              }}
              control={control}
              label="log server port"
              placeholder="8000"
              ltrLabel
              fullWidth
            />
          </div>
        </div>

        <BaseButton
          label={getValues('id') ? 'بروزرسانی تنظیمات' : 'ذخیره تنظیمات'}
          size="xl"
          submit
          loading={loadingButton}
        />
      </form>
    </>
  );
}
