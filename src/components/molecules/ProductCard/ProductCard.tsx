import { Card, Typography } from '@ui/atoms';
// import { Link } from 'react-router-dom';
// import { IconButton } from '@ui/atoms/BaseButton';

import { PropsType } from './types';

export function ProductCard({ item }: PropsType) {
  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-28 items-center px-2 my-2"
    >
      <div className="grid grid-cols-12  w-full items-center">
        {/* {item.link && (
          <Link to={`${item.link}/${item.id}`}>
            <IconButton icon="jam:more-vertical" color="white" />
          </Link>
        )} */}
        <div className="col-span-10 ml-4 mr-auto te">
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
        <div className="col-span-2 h-24 w-36 rounded-md p-1 shadow-md">
          <img
            src={item.image}
            alt={item?.model}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}
