import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { BaseButton } from '@ui/atoms';
import { PageBackButton } from '@ui/atoms/BackButton';
import { TValueOnChange } from '@ui/atoms/DropDown/type';
import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { IpsList } from '@ui/molecules/IpsList';
import { AddIpForm } from '@ui/molecules/IpsList/components/AddIpForm';
import { Modal } from '@ui/molecules/Modal';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { API_ADD_VALID_IPS } from '@src/services/client/rules';
import { E_RULES_VALID_IPS } from '@src/services/client/rules/endpoint';
import { EIpType, IIp } from '@src/services/client/rules/types';
import { useGet } from '@src/services/http/httpClient';

/**
 * FilterIps component for managing and displaying IP addresses.
 *
 * @component
 * @returns {JSX.Element}
 */

export function FilterIps(): JSX.Element {
  const [openIps, setOpenIps] = useState<EIpType | null>(null);
  const [ips, setIps] = useState<IIp[]>([]);
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

  const dropValueChange: TValueOnChange = (value) => {
    setOpenIps(value.target.value as EIpType);
  };

  const selectOptions = [
    { id: '1', label: 'همه IPها', value: EIpType.ALL },
    { id: '2', label: 'داخلی', value: EIpType.INTERNAL },
    { id: '3', label: 'خارجی', value: EIpType.EXTERNAL },
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
        <div className="grid items-baseline justify-between grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 py-4 gap-7">
            <SearchInput onChange={handleOnSearch} value={search} />
            <BaseSelect
              selectOptions={selectOptions}
              name="ip-type"
              id="rules-sort"
              size="freeWidth"
              pureValue={openIps as string}
              pureOnChange={dropValueChange}
            />
          </div>
          <div className="flex gap-6 sm:justify-end">
            <BaseButton
              label="اضافه کردنIP"
              type="default"
              onClick={() => setModalOpen(true)}
              size="lg"
            />
            <div className="hidden sm:block">
              <PageBackButton />
            </div>
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
