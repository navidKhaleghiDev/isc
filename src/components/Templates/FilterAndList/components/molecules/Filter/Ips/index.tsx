import { useState } from 'react';
import { BaseButton, Card, BaseInput } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { IconButton } from '@ui/atoms/BaseButton';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { API_ADD_VALID_IPS } from '@src/services/client/rules';
import { IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { defaultValues } from './constants';

export enum EIpType {
  EXTERNAL = 'External',
  INTERNAL = 'Internal',
}
export function FilterIps() {
  const [openIps, setOpenIps] = useState<EIpType | null>(null);
  const { control, handleSubmit, reset } = useForm<typeof defaultValues>({
    mode: 'onChange',
    defaultValues,
  });
  const { mutate } = useGet(E_RULES_VALID_IPS);

  const handelSubmitForm = async (formValues: typeof defaultValues) => {
    const dataArray = Object.values(formValues);
    if (!dataArray.find((i) => i !== '')) {
      toast.error('لطفا یک آی پی وارد کنید');
      return;
    }
    const body: IIp[] = [];
    dataArray.forEach((i: string) => {
      if (i !== '') {
        body.push({ ip: i, ip_type: openIps as EIpType });
      }
    });

    await API_ADD_VALID_IPS(body)
      .then(() => {
        toast.success('با موفقیت اضافه شد');
        reset(defaultValues);
        mutate();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <div className="flex w-full justify-center items-center my-6">
        <BaseButton
          label="ثبت آی پی های مجاز خارجی"
          size="lg"
          type={openIps === EIpType.EXTERNAL ? 'default' : 'shadow'}
          onClick={() => setOpenIps(EIpType.EXTERNAL)}
          className="mx-2"
        />
        <BaseButton
          label="ثبت آی پی های مجاز داخلی"
          size="lg"
          type={openIps === EIpType.INTERNAL ? 'default' : 'shadow'}
          onClick={() => setOpenIps(EIpType.INTERNAL)}
          className="mx-2"
        />
      </div>
      <div>
        {openIps && (
          <form onSubmit={handleSubmit(handelSubmitForm)}>
            <Card color="neutral" className="pt-5 px-3">
              <div className="grid grid-cols-4 gap-x-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <BaseInput
                    size="xs"
                    key={item}
                    name={`ip_${item}`}
                    placeholder="مثال: 192.168.1.1"
                    id={`ip_${item}`}
                    control={control}
                    rules={{ pattern: regexPattern.ip }}
                    fullWidth
                  />
                ))}
              </div>
            </Card>
            <div className="flex mt-2">
              <IconButton
                icon="fe:check"
                color="teal"
                className="mx-2"
                type="submit"
                // onClick={() => }
              />
              <IconButton
                icon="fe:close"
                color="red"
                className="mx-2"
                onClick={() => setOpenIps(null)}
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
}
