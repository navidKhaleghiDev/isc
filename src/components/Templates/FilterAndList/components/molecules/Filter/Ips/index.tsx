import { useState } from 'react';
import { BaseButton, Dropdown } from '@ui/atoms';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { IpsList } from '@ui/molecules/IpsList';
import { API_ADD_VALID_IPS } from '@src/services/client/rules';
import { IIp, EIpType } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { TValueOnChange } from '@ui/atoms/DropDown/type';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { defaultValues } from './constants';
import { Modal } from '@ui/molecules/Modal/Modal';
import { AddIpForm } from '@ui/molecules/IpsList/AddIpForm';
import { IpCard } from '@ui/molecules/IpCard';

export type handelSubmitFormProp = typeof defaultValues;

export function FilterIps() {
  const [openIps, setOpenIps] = useState<EIpType | null>(null);
  const [ips, setIps] = useState<IIp[]>([]);
  const { control, reset } = useForm<typeof defaultValues>({
    mode: 'onChange',
    defaultValues,
  });
  // const [loading, setLoading] = useState(false);
  const { mutate } = useGet(E_RULES_VALID_IPS);
  const [search, setSearch] = useState('');
  const handleOnSearch = (value: string) => {
    setSearch(value);
  };
  const [modalOpen, setModalOpen] = useState(false);

  const dropValueChange: TValueOnChange = (value) =>
    setOpenIps(value.title as EIpType);
  const dropDownOptions = [
    { id: '1', label: 'همه IPها', title: EIpType.ALL },
    { id: '2', label: 'داخلی', title: EIpType.INTERNAL },
    { id: '3', label: 'خارجی', title: EIpType.EXTERNAL },
  ];

  const handelSubmitForm = async (formValues: handelSubmitFormProp) => {
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

  // const handleAddIp = async (ip: string) => {
  //   setLoading(true);
  //   try {
  //     const body: IIp = { ip, ip_type: openIps as EIpType };
  //     await API_ADD_VALID_IPS([body]);
  //     toast.success('آی پی با موفقیت اضافه شد');
  //     const updatedIps = [...ips, body];
  //     setIps(updatedIps);
  //     mutate();
  //   } catch (err) {
  //     toast.error('خطا در اضافه کردن آی پی');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center h-full">
          <form className="p-4 flex justify-start items-center gap-4 ">
            <SearchInput onChange={handleOnSearch} value={search} />

            <Dropdown
              options={dropDownOptions}
              placeHolder="همه IPها"
              control={control}
              name="ip_1"
              size="lg"
              id="rules-sort"
              valueOnChange={dropValueChange}
            />
          </form>
          <BaseButton
            label="اضافه کردن IP"
            type="default"
            size="lg"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>
      <IpsList filterProduct={openIps} searchQuery={search} />
      <div className="mt-4">
        {ips.map((ip, index) => (
          <IpCard
            key={index}
            item={ip}
            mutateIpList={() => setIps([...ips])} // به‌روزرسانی لیست IPها
          />
        ))}
      </div>
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        type="none"
        title="IP جدید را وارد کنید"
        content={
          <AddIpForm
            onSubmit={handelSubmitForm}
            onCloseModal={() => setModalOpen(false)}
            ipType={openIps}
          />
        }
      />
    </>
  );
}
