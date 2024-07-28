/* eslint-disable no-nested-ternary */
import { Card, Typography } from '@ui/atoms';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useGet } from '@src/services/http/httpClient';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { useUserContext } from '@context/user/userContext';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';
import { CardImage } from '@ui/atoms/BaseImage';
import { NoResult } from '@ui/molecules/NoResult';
import { CardProduct } from '@ui/molecules/CardProduct';
import { ProductBox } from './ProductBox';
// import { AiButtonsCard } from './AiButtonsCard';

/**
 * GridMyProduct component creates a grid layout for displaying children elements.
 *
 * @component
 * @param {Object} props - The properties for the GridMyProduct component.
 * @param {React.ReactNode} props.children - The elements to be displayed within the grid.
 * @param {string} [props.className] - Additional class names for custom styling.
 * @returns {JSX.Element} The GridMyProduct component.
 */

function MyProductPageCp() {
  const { user } = useUserContext();
  const { data } = useGet<ResponseSwr<IProduct>>(
    user?.device_serial ? E_USERS_PRODUCT : null
  );

  const product = data?.data;

  return (
    <div className="py-8 pr-8 pl-28  ">
      {user?.device_serial ? (
        product ? (
          <Card shadow="sm" className="grid grid-cols-2 gap-8 p-16 ">
            <div>
              <div className="col-span-2 flex flex-col items-end">
                <Typography color="neutral_dark" size="h4" className="w-full">
                  {product?.device?.model}
                </Typography>
                <Typography color="neutral" size="body4">
                  {product?.device?.description}
                </Typography>
              </div>
              <div className="pt-10">
                <CardProduct label="شماره سریال" value={product?.id} />
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
            </div>
            <CardImage
              src={product?.device.image}
              alt={product?.device.image}
              className="min-h-[25.75rem]"
            />
          </Card>
        ) : (
          <NoResult />
        )
      ) : (
        <NotCompletedAuth
          title="جزییات محصول"
          isUserAuth={!!user?.is_authenticated}
        />
      )}
      <div className="grid grid-cols-3 gap-16 mt-5">
        <ProductBox
          labelHead="آی پی های مجاز داخلی و خارجی"
          linkAddress={ROUTES_PATH.myProductIpsList}
          buttonLabel="لیست آی پی ها"
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
      {/* we have not design for it */}
      {/* <AiButtonsCard /> */}
    </div>
  );
}

const MyProductPage = WithPermission(MyProductPageCp, EUserRole.ADMIN, true);
export { MyProductPage };
