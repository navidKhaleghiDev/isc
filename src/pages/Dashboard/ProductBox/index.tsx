import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { useGet } from '@src/services/http/httpClient';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { Card, Typography, Notification } from '@ui/atoms';
import { LoadingSpinner } from '@ui/molecules/Loading';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';
import { useUserContext } from '@context/user/userContext';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';
import { CardImage } from '@ui/atoms/BaseImage';

function ProductBoxCp() {
  const { user } = useUserContext();
  const { data, isLoading, error } = useGet<ResponseSwr<IProduct>>(
    user?.device_serial ? E_USERS_PRODUCT : null
  );
  const product = data?.data;
  if (!user?.is_authenticated || !user?.device_serial) {
    return (
      <NotCompletedAuth
        title="جزییات داشبورد"
        isUserAuth={!!user?.is_authenticated}
      />
    );
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
    <div className="grid">
      <div className="flex flex-col justify-between col-span-2 h-full">
        <CardImage
          src={product?.device.image}
          alt={product?.device?.model}
          className="h-60"
        />
        <Card className="flex justify-end items-center py-8 px-2.5">
          <div className="flex flex-col justify-end items-end ml-4">
            <Typography color="neutral" size="h4">
              {product?.device?.model}
            </Typography>
            <Typography color="neutral" size="body3">
              {product?.device?.description}
            </Typography>
          </div>
        </Card>
        <div className="grid">
          <Card className="flex justify-start items-center mb-6">
            <div className="flex flex-col justify-end items-start ml-4 w-full">
              <Typography size="h6" weight="bold">
                شماره سریال
              </Typography>
              <Typography
                color="neutral"
                size="body3"
                className="bg-neutral-100 w-full px-2.5 rounded-lg"
              >
                {product?.id}
              </Typography>
            </div>
          </Card>
          <Card className="flex justify-start items-center mb-6">
            <div className="flex flex-col justify-end items-start ml-4 w-full">
              <Typography size="h6" weight="bold">
                ثبت محصول
              </Typography>
              <Typography
                color="neutral"
                size="body3"
                className="bg-neutral-100 w-full px-2.5 rounded-lg"
              >
                {persianDateAndNumber(product?.created_at)}
              </Typography>
            </div>
          </Card>
          {product?.address && (
            <Card className="flex justify-start items-center mb-6">
              <div className="flex flex-col justify-end items-start ml-4 w-full">
                <Typography size="h6" weight="bold">
                  آدرس
                </Typography>
                <Typography
                  color="neutral"
                  size="body3"
                  className="bg-neutral-100 w-full px-2.5 rounded-lg"
                >
                  {product?.address}
                </Typography>
              </div>
            </Card>
          )}
          <Card className="flex justify-start items-center mb-6">
            <div className="flex flex-col justify-end items-start ml-4 w-full">
              <Typography size="h6" weight="bold">
                تاریخ انقضاء لایسنس
              </Typography>
              <Typography
                color="neutral"
                size="body3"
                className="bg-neutral-100 w-full px-2.5 rounded-lg"
              >
                {persianDateAndNumber(product?.license_exp)}
              </Typography>
            </div>
          </Card>
          <Card className="flex justify-start items-center mb-6">
            <div className="flex flex-col justify-end items-start ml-4 w-full">
              <Typography size="h6" weight="bold">
                تعداد قوانین
              </Typography>
              <Typography
                color="neutral"
                size="body3"
                className="bg-neutral-100 w-full px-2.5 rounded-lg"
              >
                {product?.recommended_rules.length}
              </Typography>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const ProductBox = WithPermission(ProductBoxCp, EUserRole.ADMIN);
export { ProductBox };
