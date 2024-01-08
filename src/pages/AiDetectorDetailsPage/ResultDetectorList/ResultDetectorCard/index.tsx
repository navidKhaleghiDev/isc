import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { IMyDetectorData } from '@src/services/client/ai/types';
import { Card, Typography } from '@ui/atoms';

type PropsType =
  | {
      isHeader: true;
      item?: Partial<Record<keyof IMyDetectorData, string>>;
    }
  | {
      isHeader?: false;
      item: IMyDetectorData;
    };

export function ResultDetectorCard({ item, isHeader }: PropsType) {
  return (
    <Card
      color="neutral"
      className={`${
        !isHeader && 'border-l-[0.2rem] border-teal-600'
      } flex items-center ${isHeader ? 'h-10' : 'h-16 '} px-2 my-2 `}
    >
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-1/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.time) : item?.time}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.src_mac}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.dst_mac}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-1/12 text-center text-neutral-400"
      >
        {item?.fc_request}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-1/12 text-center text-neutral-400"
      >
        {item?.src_port}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-1/12 text-center text-neutral-400"
      >
        {item?.dst_port}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.src_ip}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.dst_ip}
      </Typography>
      <div className="w-2/12 text-center text-neutral-400">
        {!isHeader ? (
          <Typography color={item?.is_attack ? 'red' : 'teal'} size="body3">
            {item?.is_attack ? 'نا امن' : 'امن'}
          </Typography>
        ) : (
          <Typography color={isHeader ? 'neutral' : null} size="body3">
            {item?.is_attack}
          </Typography>
        )}
      </div>
    </Card>
  );
}
