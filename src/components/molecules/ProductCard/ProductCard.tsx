import { Card, Typography } from '@ui/atoms';
import { CardImage } from '@ui/atoms/BaseImage';
import { ServerStatus } from '@ui/organisms/Navbar/StatusServices/ServerStatus';
import { PropsType } from './types';

export function ProductCard({ item }: PropsType) {
  return (
    <>
      <Card
        color="neutral"
        className="border-l-[0.2rem] border-teal-600 flex min-h-28 items-center px-2 my-2"
      >
        <div className="grid grid-cols-12 w-full items-center">
          <div className="col-span-10 ml-4 mr-auto">
            <Typography
              color="teal"
              size="body2"
              type="div"
              className="text-left"
            >
              {item?.model}
            </Typography>
            <Typography
              className="text-neutral-400 text-left"
              size="body2"
              type="div"
            >
              {item.description}
            </Typography>
          </div>
          <CardImage
            src={item.image}
            alt={item?.model}
            className="col-span-2 h-24 my-2 p-1"
          />
        </div>
      </Card>
      <ServerStatus />
    </>
  );
}
