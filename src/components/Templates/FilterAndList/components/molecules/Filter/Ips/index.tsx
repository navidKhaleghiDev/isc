import { API_ADD_VALID_IPS } from '@src/services/client/rules';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { EIpType, IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';
import { BaseButton, Dropdown } from '@ui/atoms';
import { PageBackButton } from '@ui/atoms/BackButton';
import { TValueOnChange } from '@ui/atoms/DropDown/type';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { IpsList } from '@ui/molecules/IpsList';
import { AddIpForm } from '@ui/molecules/IpsList/AddIpForm';
import { Modal } from '@ui/molecules/Modal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export function FilterIps() {
  const [openIps, setOpenIps] = useState<EIpType | null>(null);
  const [ips, setIps] = useState<IIp[]>([]);
  const { control } = useForm();
  const { mutate } = useGet(E_RULES_VALID_IPS);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchIps = async () => {
      try {
        const response = await API_ADD_VALID_IPS([]);
        setIps(response.data);
      } catch (err) {
        toast.error('خطا در بارگذاری IPها');
      }
    };
    fetchIps();
  }, []);

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const dropValueChange: TValueOnChange = (value) =>
    setOpenIps(value.title as EIpType);

  const dropDownOptions = [
    { id: '1', label: 'همه IPها', title: EIpType.ALL },
    { id: '2', label: 'داخلی', title: EIpType.INTERNAL },
    { id: '3', label: 'خارجی', title: EIpType.EXTERNAL },
  ];

  const handleAddIp = async (formValues: {
    ip: string;
    ipType: string | undefined;
  }) => {
    const { ip, ipType } = formValues;
    if (!ip) {
      toast.error('لطفا یک آی پی وارد کنید');
      return;
    }

    const body: IIp[] = [{ ip, ip_type: ipType as EIpType }];
    try {
      await API_ADD_VALID_IPS(body);
      toast.success('با موفقیت اضافه شد');
      setIps([...ips, ...body]);
      mutate();
    } catch (err) {
      toast.error('خطا در اضافه کردن آی پی');
    }
  };

  return (
    <>
      <div>
        <div className="w-full flex justify-between items-center h-full">
          <form className="p-4 flex justify-start items-center gap-4">
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
          <div className="flex gap-6 items-center ">
            <BaseButton
              label="اضافه کردن IP"
              type="default"
              size="lg"
              onClick={() => setModalOpen(true)}
            />
            <PageBackButton />
          </div>
        </div>
      </div>

      <IpsList filterProduct={openIps} searchQuery={search} />
      <Modal
        size="sm"
        open={modalOpen}
        setOpen={setModalOpen}
        type="none"
        title="Ip مورد نظر را وارد کنید "
        content={
          <AddIpForm
            onCloseModal={() => setModalOpen(false)}
            onSubmit={handleAddIp}
          />
        }
      />
    </>
  );
}
