import { Card, Typography } from '@ui/atoms';
import { CardImage } from '@ui/atoms/BaseImage';
import { NoResult } from '@ui/molecules/NoResult';
import { CardProduct } from '@ui/molecules/CardProduct';
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useGet } from '@src/services/http/httpClient';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { useUserContext } from '@context/user/userContext';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';

import { ProductBox } from './ProductBox';

/**
 * Component to display detailed information about the product.
 *
 * @param {object} props.product - The product data type.
 * @returns {JSX.Element}
 */

function ProductDetail({
  product,
}: {
  product: IProduct | undefined;
}): JSX.Element {
  return product ? (
    <Card className="sm:shadow-sm lg:px-16 lg:pt-16 p-5 ">
      <div className="flex flex-col">
        <div className="flex flex-col w-1/2">
          <Typography color="neutral_dark" size="h4">
            {product?.device?.model}
          </Typography>
          <Typography color="neutral" size="body4" className="hidden lg:block">
            {product?.device?.description}
          </Typography>
        </div>
        <div className="lg:grid lg:grid-cols-2 flex flex-row-reverse w-full gap-8 ">
          <div className="flex flex-col sm:w-full w-1/2">
            <CardProduct
              label="شماره سریال"
              value={product?.id}
              className="hidden lg:block"
            />
            <CardProduct
              label="ثبت محصول"
              value={persianDateAndNumber(product?.created_at)}
            />
            <CardProduct
              label="تاریخ انقضا لایسنس"
              value={persianDateAndNumber(product?.license_exp)}
            />
            <CardProduct
              label="تعداد قوانین"
              value={product?.recommended_rules.length}
            />
          </div>
          <div className="sm:w-full w-1/2">
            <CardImage
              src={product?.device.image}
              alt={product?.device.model}
              className="lg:h-[25.75rem] w-full h-36  object-cover lg:-translate-y-1/4 translate-y-1/3 "
            />
          </div>
        </div>
        <CardProduct
          label="شماره سریال"
          value={product?.id}
          className="block lg:hidden"
        />
      </div>
    </Card>
  ) : (
    <NoResult />
  );
}

/**
 * MyProductPageCp is a component that displays detailed information about the product.
 *
 *
 * @component
 * @returns {JSX.Element}
 */

function MyProductPageCp(): JSX.Element {
  const { user } = useUserContext();
  const { data } = useGet<ResponseSwr<IProduct>>(
    user?.device_serial ? E_USERS_PRODUCT : null
  );

  const product = data?.data;

  return (
    <div className="sm:px-1">
      {user?.device_serial ? (
        <ProductDetail product={product} />
      ) : (
        <NotCompletedAuth
          title="جزییات محصول"
          isUserAuth={!!user?.is_authenticated}
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[0.688rem] sm:gap-[1.875rem] sm:mt-5 mt-0 sm:p-0 p-5">
        <ProductBox
          labelHead="آی پی های مجاز داخلی و خارجی"
          linkAddress={ROUTES_PATH.myProductIpsList}
          buttonLabel="لیستIPها"
        />
        <ProductBox
          labelHead="قوانین محصول"
          linkAddress={ROUTES_PATH.myProductMyRules}
          buttonLabel="قوانین من"
        />
        <ProductBox
          labelHead="همگام سازی داده با تنظیمات"
          // this link its not correct
          linkAddress={ROUTES_PATH.myProductIpsList}
          buttonLabel="تنظیمات"
        />
      </div>
    </div>
  );
}

const MyProductPage = WithPermission(MyProductPageCp, EUserRole.ADMIN, true);
export { MyProductPage };
