import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { IMyLearner } from '@src/services/client/ai/types';
import moreIcon from '@iconify-icons/ph/dots-three-outline-vertical-fill'; // انجام شده فالس

import { Card, Typography } from '@ui/atoms';
import { KeyedMutator } from 'swr';
import { PaginationResponseSwr } from '@src/types/services';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { IconButton } from '@ui/atoms/BaseButton';

type PropsType =
  | {
      isHeader: true;
      item?: Partial<Record<keyof IMyLearner, string>>;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyLearner[]>>;
    }
  | {
      isHeader?: false;
      item: IMyLearner;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyLearner[]>>;
    };

type StatusPropsType = {
  idFinished?: 'False' | 'True';
};

function Status({ idFinished }: StatusPropsType) {
  return (
    <div className="flex justify-center items-center">
      <Typography color={!idFinished ? 'neutral' : 'teal'} size="body3">
        {idFinished === 'False' ? 'در حال انجام' : 'انجام شده'}
      </Typography>
    </div>
  );
}

export const LEARNER_NAME = 'تحلیل گر';

export function LearnerCard({ item, isHeader }: PropsType) {
  return (
    <Card
      color="neutral"
      className={`${
        !isHeader && 'border-l-[0.2rem] border-teal-600'
      } flex items-center ${isHeader ? 'h-10' : 'h-16 '} px-2 my-2 `}
    >
      <div className="w-1/12 text-center text-neutral-400">
        {!isHeader && (
          <Link to={`${ROUTES_PATH.myProductAiLearner}/${item.id}`}>
            <IconButton icon={moreIcon} color="tealNoBg" />
          </Link>
        )}
      </div>

      <div className="w-2/12 text-center text-neutral-400">
        {!isHeader ? (
          <Status idFinished={item.is_finished} />
        ) : (
          <Typography color={isHeader ? 'neutral' : null} size="body3">
            {item?.is_finished}
          </Typography>
        )}
      </div>

      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.time_from) : item?.time_from}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.time_to) : item?.time_to}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-5/12 text-left text-neutral-400"
      >
        {!isHeader
          ? `${LEARNER_NAME} - ${persianDateAndNumber(item.created_at)}`
          : item?.created_at}
      </Typography>
    </Card>
  );
}
