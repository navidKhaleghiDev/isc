import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { useGet } from '@src/services/http/httpClient';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { Card, Typography, BaseIcon, Notification } from '@ui/atoms';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';
import { useUserContext } from '@context/user/userContext';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';

import { NotHaveDeviceSerial } from '../../../components/molecules/NotHaveDeviceSerial';

function ProductBoxCp() {
  const { user } = useUserContext();
  const { data, isLoading, error } = useGet<ResponseSwr<IProduct>>(
    user?.device_serial ? E_USERS_PRODUCT : null
  );
  const product = data?.data;

  if (!user?.device_serial) {
    return <NotHaveDeviceSerial title="جزییات داشبورد" />;
  }

  if (error) {
    return (
      <Notification
        outline="error"
        title="در حال حاضر دسترسی به این بخش مقدور نمی باشد."
        type="error"
      />
    );
  }

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="grid grid-cols-3 gap-6 mb-16">
      <div className="col-span-2">
        <Card color="neutral" className="flex justify-end items-center">
          <div className="flex flex-col justify-end items-end ml-4">
            <Typography color="neutral" size="h4">
              {product?.device?.model}
            </Typography>
            <Typography color="neutral" size="body3">
              {product?.device?.description}
            </Typography>
          </div>
        </Card>
        <Typography
          color="neutral"
          size="h6"
          className="bg-teal-600 text-white py-1 rounded-md my-4 text-center"
        >
          {product?.id}
        </Typography>
        <div className="grid grid-cols-3 gap-6">
          <Card
            color="neutral"
            className="flex justify-start items-center pr-4"
          >
            <div className="flex flex-col justify-end items-start ml-4">
              <Typography color="teal" size="h6">
                تاریخ ثبت محصول
              </Typography>
              <Typography color="neutral" size="body3">
                {persianDateAndNumber(product?.created_at)}
              </Typography>
            </div>
          </Card>
          <Card
            color="neutral"
            className="flex justify-start items-center pr-4"
          >
            <div className="flex flex-col justify-end items-start ml-4">
              <Typography color="teal" size="h6">
                آدرس
              </Typography>
              <Typography color="neutral" size="body3">
                {product?.address}
              </Typography>
            </div>
          </Card>
          <Card
            color="neutral"
            className="flex justify-start items-center pr-4"
          >
            <div className="flex flex-col justify-end items-start ml-4">
              <Typography color="teal" size="h6">
                تاریخ انقضاء لایسنس
              </Typography>
              <Typography color="neutral" size="body3">
                {persianDateAndNumber(product?.license_exp)}
              </Typography>
            </div>
          </Card>
        </div>
      </div>

      <Card
        color="neutral"
        className="flex justify-center items-center bg-neutral-200"
      >
        {product?.device.image ? (
          <img
            src={product.device.image}
            alt={product?.device?.model}
            className="bg-neutral-100 p-2 rounded-md"
          />
        ) : (
          <BaseIcon
            icon="mdi:panorama-variant-outline"
            size="xxl"
            className="text-neutral-300"
          />
        )}
      </Card>
    </div>
  );
}

const ProductBox = WithPermission(ProductBoxCp, EUserRole.ADMIN);
export { ProductBox };
