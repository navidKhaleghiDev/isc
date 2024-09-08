import PhMapPin from '@iconify-icons/ph/map-pin';
import PhPhone from '@iconify-icons/ph/phone';

import { ProductNameTemplate } from '@ui/Templates/ProductName';
import { Card, Typography } from '@ui/atoms';
import { TypographyIcon } from '@ui/atoms/Typography/TypographyIcon';

export function ProductNamePage() {
  return (
    <ProductNameTemplate>
      <div>
        <div className="w-full flex flex-col items-end">
          <Typography size="h4" color="teal">
            Product name
          </Typography>
          <Typography size="body1" color="neutral" className="mt-4">
            Description
          </Typography>
        </div>
        <Card
          border
          borderColor="teal"
          color="white"
          className="w-full flex items-center justify-center mt-8 border-2  h-10"
        >
          <Typography size="body3" color="teal">
            nfvhvbeb1465fdb56df4b4fd654 5656 5x 56zxc 54sav4as8
          </Typography>
        </Card>
        <Card color="neutral" className="mt-6">
          <div className="flex items-center p-8">
            <div className="w-2/3 flex flex-col items-start mx-5 ">
              <TypographyIcon
                text="آدرس ارسال شده"
                size="h4"
                startIcon={PhMapPin}
                iconColor="teal"
                color="teal"
                iconSize="md"
                // className="self-start"
              />
              <Card
                border
                borderColor="teal"
                color="white"
                className="w-full flex items-center justify-start pr-3 border-2 mt-2 h-10"
              >
                <Typography size="body3" className="align-right" color="teal">
                  تهران، خیابان فاطمی
                </Typography>
              </Card>
            </div>
            <div className="w-1/3 flex flex-col items-start mx-5 ">
              <TypographyIcon
                text="تلفن"
                size="h4"
                startIcon={PhPhone}
                iconColor="teal"
                color="teal"
                iconSize="md"
              />
              <Card
                border
                borderColor="teal"
                color="white"
                className="w-full flex items-center justify-center border-2 mt-2 h-10"
              >
                <Typography size="body3" color="teal">
                  09125689654
                </Typography>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </ProductNameTemplate>
  );
}
