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
import { CardProduct } from '@ui/molecules/CardProduct';

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
          <div className="flex flex-col justify-end items-end">
            <Typography
              color="neutral"
              size="body4"
              weight="medium"
              className="w-full sm:text-2xl mb-[0.625rem]"
            >
              {product?.device?.model}
            </Typography>
            <Typography
              color="neutral"
              size="body5"
              weight="normal"
              className="sm:text-base"
            >
              {product?.device?.description}
            </Typography>
          </div>
        </Card>
        <div className="grid">
          <CardProduct label="شماره سریال" value={product?.id} />

          <CardProduct
            label="ثبت محصول"
            value={persianDateAndNumber(product?.created_at)}
          />

          {product?.address && (
            <CardProduct label="آدرس" value={product?.address} />
          )}

          <CardProduct
            label="تاریخ انقضاء لایسنس"
            value={persianDateAndNumber(product?.license_exp)}
          />

          <CardProduct
            label="تعداد قوانین"
            value={product?.recommended_rules.length}
          />
        </div>
      </div>
    </div>
  );
}

const ProductBox = WithPermission(ProductBoxCp, EUserRole.ADMIN);
export { ProductBox };
