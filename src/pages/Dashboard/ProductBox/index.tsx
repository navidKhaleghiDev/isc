import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { useGet } from '@src/services/http/httpClient';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { Card, Typography, BaseIcon } from '@ui/atoms';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';

export function ProductBox() {
  const { data, isLoading } = useGet<ResponseSwr<IProduct>>(E_USERS_PRODUCT);
  const product = data?.data;

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
                تعداد قوانین ثبت شده
              </Typography>
              <Typography color="neutral" size="body3">
                {product?.recommended_rules.length}
              </Typography>
            </div>
          </Card>
        </div>
      </div>

      <Card
        color="neutral"
        className="flex justify-center items-center bg-neutral-200"
      >
        <BaseIcon
          icon="mdi:panorama-variant-outline"
          size="xxl"
          className="text-neutral-300"
        />
      </Card>
    </div>
  );
}
