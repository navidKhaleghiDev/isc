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
import { AiButtonsCard } from './AiButtonsCard';

interface PropsType extends PropsWithChildren {
  className?: string;
}

/**
 * GridMyProduct component creates a grid layout for displaying children elements.
 *
 * @component
 * @param {Object} props - The properties for the GridMyProduct component.
 * @param {React.ReactNode} props.children - The elements to be displayed within the grid.
 * @param {string} [props.className] - Additional class names for custom styling.
 * @returns {JSX.Element} The GridMyProduct component.
 */

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
      <div className="grid grid-cols-2 gap-16 mt-16">
        <Link
          to={ROUTES_PATH.myProductIpsList}
          className="col-span-2 md:col-span-1"
        >
          <BaseButton fullWidth label="لیست آی پی ها" size="lg" />
        </Link>

        <Link
          to={ROUTES_PATH.myProductMyRules}
          className="col-span-2 md:col-span-1"
        >
          <BaseButton fullWidth label="قوانین من" size="lg" />
        </Link>
        <div className="col-span-2 md:col-span-1 md:col-start-2">
          <AiButtonsCard />
        </div>
      </div>
    </div>
  );
}

const MyProductPage = WithPermission(MyProductPageCp, EUserRole.ADMIN, true);
export { MyProductPage };
