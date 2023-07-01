/* eslint-disable no-nested-ternary */
import { BaseButton, BaseIcon, Card, Typography } from '@ui/atoms';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { useGet } from '@src/services/http/httpClient';
import { IProduct, ResponseSwr } from '@src/services/client/users/types';
import { E_USERS_PRODUCT } from '@src/services/client/users/endpoint';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { TitleMyProduct } from '@ui/molecules/TitleMyProduct';
import { useUserContext } from '@context/user/userContext';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { NotCompletedAuth } from '@ui/molecules/NotCompletedAuth';

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
        <>
          <GridMyProduct>
            <div className="col-span-2 flex flex-col items-end">
              <Typography color="neutral" size="h4">
                {product?.device?.model}
              </Typography>
              <Typography color="neutral" size="body3">
                {product?.device?.description}
              </Typography>
            </div>
            <Card
              color="neutral"
              className="min-h-[14rem] bg-neutral-300 flex justify-center items-center"
            >
              {product?.device.image ? (
                <img
                  src={product?.device.image}
                  alt={product?.device?.model}
                  className="w-full h-full object-cover p-2"
                />
              ) : (
                <BaseIcon
                  icon="icon-park-outline:ad-product"
                  color="neutral"
                  size="xxl"
                />
              )}
            </Card>
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
            <Card color="neutral" className="flex items-center px-4">
              <TitleMyProduct title="تعداد قوانین" />
              <Typography color="teal" size="h6" className="mr-auto">
                {product?.recommended_rules.length}
              </Typography>
            </Card>
          </GridMyProduct>
          <GridMyProduct className="mt-4">
            <Card
              className="col-span-2 h-9 flex items-center px-4"
              color="neutral"
            >
              <TitleMyProduct title="آدرس ارسال شده" />
              <Typography color="neutral" size="h6" className="">
                {product?.address}
              </Typography>
            </Card>
            <Card color="neutral" className="flex items-center px-4">
              <TitleMyProduct title="تاریخ ثبت" />
              <Typography color="neutral" size="h6" className="mr-auto">
                {persianDateAndNumber(product?.created_at)}
              </Typography>
            </Card>
          </GridMyProduct>
          <GridMyProduct className="mt-4">
            <Card
              className="col-span-2 h-9 flex items-center px-4"
              color="neutral"
            >
              <TitleMyProduct title="تلفن" />
              <Typography color="neutral" size="h6" className="">
                {product?.organization_number}
              </Typography>
            </Card>
            <Card color="neutral" className="flex items-center px-4">
              <TitleMyProduct title="نام برند محصول" />

              <Typography color="neutral" size="h6" className="mr-auto">
                {product?.device.brand.name}
              </Typography>
            </Card>
          </GridMyProduct>
        </>
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
