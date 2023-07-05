/* eslint-disable no-nested-ternary */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
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
import { CardProductBox } from './CardProductBox';

interface PropsType extends PropsWithChildren {
  className?: string;
}
function GridMyProduct({ children, className }: PropsType) {
  return (
    <div className={`grid grid-cols-3 gap-5 ${className}`}>{children}</div>
  );
}

function MyProductPageCp() {
  const { user } = useUserContext();
  const { data } = useGet<ResponseSwr<IProduct>>(
    user?.device_serial ? E_USERS_PRODUCT : null
  );

  const product = data?.data;

  return (
    <div className="p-16">
      {user?.device_serial ? (
        product ? (
          <>
            <GridMyProduct className="h-56">
              <div className="col-span-2 flex flex-col items-end">
                <Typography color="neutral" size="h4">
                  {product?.device?.model}
                </Typography>
                <Typography color="neutral" size="body3">
                  {product?.device?.description}
                </Typography>
              </div>
              <CardImage
                src={product?.device.image}
                alt={product?.device.image}
                className="min-h-[14rem] p-2"
              />
            </GridMyProduct>
            <GridMyProduct className="mt-4">
              <Card
                className="col-span-2 h-9 flex justify-center items-center"
                color="neutral"
              >
                <Typography size="h6" color="neutral" className="text-center ">
                  {product?.id}
                </Typography>
              </Card>
              <CardProductBox
                label="تعداد قوانین"
                value={product.recommended_rules.length}
                className="px-4"
                valueColor="teal"
              />
            </GridMyProduct>
            <GridMyProduct className="mt-4">
              <CardProductBox
                label="آدرس ارسال شده"
                value={product.address}
                className="col-span-2 px-4"
                isValueLeft
              />
              <CardProductBox
                label="تاریخ ثبت"
                value={persianDateAndNumber(product.created_at)}
                className=" px-4"
              />
            </GridMyProduct>
            <GridMyProduct className="mt-4">
              <CardProductBox
                label="تلفن"
                value={product.organization_number}
                className="col-span-2 px-4"
                isValueLeft
              />
              <CardProductBox
                label="نام برند محصول"
                value={product.device.brand.name}
                className="px-4"
              />
            </GridMyProduct>
          </>
        ) : (
          <NoResult />
        )
      ) : (
        <NotCompletedAuth
          title="جزییات محصول"
          isUserAuth={!!user?.is_authenticated}
        />
      )}
      <div className="grid grid-cols-2 gap-5 mt-16">
        <div>
          <Link to={ROUTES_PATH.myProductIpsList}>
            <BaseButton fullWidth label="لیست آی پی ها" size="lg" />
          </Link>
          {/* <Card
            color="neutral"
            className="flex justify-around items-center w-full mt-4"
          >
            <Typography color="teal" size="h6">
              آخرین به روز رسانی
            </Typography>
            <p className=" text-neutral-400">|</p>
            <Typography color="neutral" size="h6">
              23 . اردیبهشت . 1402
            </Typography>
          </Card> */}
        </div>
        <div>
          <Link to={ROUTES_PATH.myProductMyRules}>
            <BaseButton fullWidth label="قوانین من" size="lg" />
          </Link>
          {/* <Card
            color="neutral"
            className="flex justify-around items-center w-full mt-4"
          >
            <Typography color="teal" size="h6">
              آخرین به روز رسانی
            </Typography>
            <p className=" text-neutral-400">|</p>
            <Typography color="neutral" size="h6">
              23 . اردیبهشت . 1402
            </Typography>
          </Card> */}
        </div>
      </div>
    </div>
  );
}

const MyProductPage = WithPermission(MyProductPageCp, EUserRole.ADMIN, true);
export { MyProductPage };
