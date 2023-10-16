import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import stopFillIcon from '@iconify-icons/ph/stop-fill';
import { IMyDetector } from '@src/services/client/ai/types';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { API_UPDATE_MY_DETECTOR } from '@src/services/client/ai';
import { KeyedMutator } from 'swr';
import moreIcon from '@iconify-icons/ph/dots-three-outline-vertical-fill';

import { PaginationResponseSwr } from '@src/types/services';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import ToolTip from '@ui/atoms/Tooltip';
import { DETECTOR_LABEL } from '@src/pages/AiDetectorPage/constant';

type PropsType =
  | {
      isHeader: true;
      item?: Partial<Record<keyof IMyDetector, string>>;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyDetector[]>>;
    }
  | {
      isHeader?: false;
      item: IMyDetector;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyDetector[]>>;
    };

type StatusPropsType = {
  isActive: boolean;
  id: number;
  mutate?: KeyedMutator<PaginationResponseSwr<IMyDetector[]>>;
};

type StopListenerIconProps = {
  id: number;
  mutate?: KeyedMutator<PaginationResponseSwr<IMyDetector[]>>;
};

function StopListenerIcon({ id, mutate }: StopListenerIconProps) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handelSubmit = async () => {
    setLoading(true);
    await API_UPDATE_MY_DETECTOR({
      id,
      is_running: false,
    })
      .then(() => {
        if (mutate) {
          mutate();
        }
        toast.success('با موفقیت انجام شد.');
        setOpenModal(false);
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <ToolTip tooltip="متوقف کردن" position="top">
        <IconButton
          icon={stopFillIcon}
          color="redNoBg"
          onClick={() => setOpenModal(true)}
          loading={loading}
          className="mx-2"
        />
      </ToolTip>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        type="error"
        title="از متوقف کردن این عملیات مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handelSubmit,
          loading,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: () => setOpenModal(false),
          color: 'red',
        }}
      />
    </>
  );
}

function Status({ isActive, id, mutate }: StatusPropsType) {
  return (
    <div className="flex justify-center items-center">
      {isActive && <StopListenerIcon id={id} mutate={mutate} />}
      <Typography color={!isActive ? 'neutral' : 'teal'} size="body3">
        {isActive ? 'در حال انجام' : 'انجام شده'}
      </Typography>
    </div>
  );
}

export function DetectorCard({ item, isHeader, mutate }: PropsType) {
  return (
    <Card
      color="neutral"
      className={`${
        !isHeader && 'border-l-[0.2rem] border-teal-600'
      } flex items-center ${isHeader ? 'h-10' : 'h-16 '} px-2 my-2 `}
    >
      <div className="w-1/12 text-center text-neutral-400">
        {!isHeader && (
          <Link to={`${ROUTES_PATH.myProductAiDetector}/${item.id}`}>
            <IconButton icon={moreIcon} color="tealNoBg" />
          </Link>
        )}
      </div>

      <div className="w-2/12 text-center text-neutral-400">
        {!isHeader ? (
          <Status isActive={item.is_running} id={item.id} mutate={mutate} />
        ) : (
          <Typography color={isHeader ? 'neutral' : null} size="body3">
            {item?.is_running}
          </Typography>
        )}
      </div>

      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-3/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.created_at) : item?.created_at}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-3/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.stoped_at) : item?.stoped_at}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : 'teal'}
        size="body3"
        type="div"
        className="w-3/12 text-left text-neutral-400"
      >
        {!isHeader ? `${DETECTOR_LABEL} ${item?.id}` : item?.id}
      </Typography>
    </Card>
  );
}
