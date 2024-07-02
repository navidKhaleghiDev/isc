import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import stopFillIcon from '@iconify-icons/ph/stop-fill';
import { IMyListeners } from '@src/services/client/ai/types';
import { Card, Typography } from '@ui/atoms';
import { IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { API_UPDATE } from '@src/services/client/ai';
import { KeyedMutator } from 'swr';
import { PaginationResponseSwr } from '@src/types/services';

type PropsType =
  | {
      isHeader: true;
      item?: Partial<Record<keyof IMyListeners, string>>;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyListeners[]>>;
    }
  | {
      isHeader?: false;
      item: IMyListeners;
      mutate?: KeyedMutator<PaginationResponseSwr<IMyListeners[]>>;
    };

type StatusPropsType = {
  isActive: boolean;
  id: number;
  mutate?: KeyedMutator<PaginationResponseSwr<IMyListeners[]>>;
};

function StopListenerIcon({ id, mutate }: any) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handelSubmit = async () => {
    setLoading(true);
    await API_UPDATE(
      {
        id,
        is_active: false,
      },
      'my_listeners'
    )
      .then(() => {
        mutate();
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
      <IconButton
        icon={stopFillIcon}
        color="red"
        onClick={() => setOpenModal(true)}
        loading={loading}
        className="mx-2"
      />
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

export function ListenerCard({ item, isHeader, mutate }: PropsType) {
  return (
    <Card
      color="neutral"
      className={`${
        !isHeader && 'border-l-[0.2rem] border-teal-600'
      } flex items-center ${isHeader ? 'h-10' : 'h-16 '} px-2 my-2 `}
    >
      <div className="w-2/12 text-center text-neutral-400">
        {!isHeader ? (
          <Status isActive={item.is_active} id={item.id} mutate={mutate} />
        ) : (
          <Typography color={isHeader ? 'neutral' : null} size="body3">
            {item?.is_active}
          </Typography>
        )}
      </div>

      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.created_at) : item?.created_at}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {!isHeader ? persianDateAndNumber(item.stoped_at) : item?.stoped_at}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.port}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.protocol}
      </Typography>
      <Typography
        color={isHeader ? 'neutral' : null}
        size="body3"
        type="div"
        className="w-2/12 text-center text-neutral-400"
      >
        {item?.interface}
      </Typography>
      {item?.id}
    </Card>
  );
}
