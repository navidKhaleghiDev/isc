import { Card, Typography } from '@ui/atoms';
import { Link } from 'react-router-dom';
import { IconButton } from '@ui/atoms/BaseButton';

import { PropsType } from './types';

export function ProductCard({ item }: PropsType) {
  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-28 items-center px-2 my-2"
    >
      <div className="flex w-full items-center">
        {item.link && (
          <Link to={`${item.link}/${item.id}`}>
            <IconButton icon="jam:more-vertical" color="white" />
          </Link>
        )}
        <div className="ml-4 mr-auto">
          <Typography color="teal" size="body2" type="div">
            {item.ruleName}
          </Typography>
          <Typography className="text-neutral-400" size="body2" type="div">
            {item.description}
          </Typography>
        </div>
        <div className="bg-teal-500 h-24 w-36 rounded-md" />
      </div>
    </Card>
  );
}
