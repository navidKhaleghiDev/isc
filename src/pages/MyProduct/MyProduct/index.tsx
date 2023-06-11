import { BaseButton, BaseIcon, Card, Typography } from '@ui/atoms';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { productCardData } from './dataMock';

interface PropsType extends PropsWithChildren {
  className?: string;
}
function GridMyProduct({ children, className }: PropsType) {
  return (
    <div className={`grid grid-cols-3 gap-5 ${className}`}>{children}</div>
  );
}

type CardTitleMyProductProps = {
  title: string;
};

function CardTitleMyProduct({ title }: CardTitleMyProductProps) {
  return (
    <div className="flex items-center">
      <Typography color="teal" size="h6" className="w-[6rem]">
        {title}
      </Typography>
      <p className=" text-neutral-400 px-2">|</p>
    </div>
  );
}

export function MyProductPage() {
  return (
    <div className="p-16">
      <GridMyProduct>
        <div className="col-span-2 flex flex-col items-end">
          <Typography color="neutral" size="h4">
            product name
          </Typography>
          <Typography color="neutral" size="body3">
            descriptin
          </Typography>
        </div>
        <Card
          color="neutral"
          className="min-h-[14rem] bg-neutral-300 flex justify-center items-center"
        >
          <BaseIcon icon="fa:home" color="neutral" size="xxl" />
        </Card>
      </GridMyProduct>
      <GridMyProduct className="mt-4">
        <Card
          className="col-span-2 h-9 flex justify-center items-center"
          color="neutral"
        >
          <Typography size="h6" color="neutral" className="text-center ">
            465656489954165416541564698
          </Typography>
        </Card>
        <Card color="neutral" className="flex items-center px-4">
          <CardTitleMyProduct title="تعداد قوانین" />
          <Typography color="teal" size="h6" className="mr-auto">
            20
          </Typography>
        </Card>
      </GridMyProduct>
      <GridMyProduct className="mt-4">
        <Card className="col-span-2 h-9 flex items-center px-4" color="neutral">
          <CardTitleMyProduct title="آدرس ارسال شده" />
          <Typography color="neutral" size="h6" className="">
            تهران، خیابان فاطمی
          </Typography>
        </Card>
        <Card color="neutral" className="flex items-center px-4">
          <CardTitleMyProduct title="تاریخ ثبت" />
          <Typography color="neutral" size="h6" className="mr-auto">
            23 . اردیبهشت . 1402
          </Typography>
        </Card>
      </GridMyProduct>
      <GridMyProduct className="mt-4">
        <Card className="col-span-2 h-9 flex items-center px-4" color="neutral">
          <CardTitleMyProduct title="تلفن" />
          <Typography color="neutral" size="h6" className="">
            09126539696
          </Typography>
        </Card>
        <Card color="neutral" className="flex items-center px-4">
          <CardTitleMyProduct title="تاریخ انقضا" />

          <Typography color="neutral" size="h6" className="mr-auto">
            23 . اردیبهشت . 1402
          </Typography>
        </Card>
      </GridMyProduct>
      <div className="grid grid-cols-2 gap-5 mt-16">
        <div>
          <Link to={ROUTES_PATH.myProductIpsList}>
            <BaseButton fullWidth label="لیست آی پی ها" size="lg" />
          </Link>
          <Card
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
          </Card>
        </div>
        <div>
          <Link to={ROUTES_PATH.myProductMyRules}>
            <BaseButton fullWidth label="قوانین من" size="lg" />
          </Link>
          <Card
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
          </Card>
        </div>
      </div>
    </div>
  );
  // return (
  //   <FilterAndList withIps>
  //     <ProductList list={productCardData} />
  //   </FilterAndList>
  // );
}
