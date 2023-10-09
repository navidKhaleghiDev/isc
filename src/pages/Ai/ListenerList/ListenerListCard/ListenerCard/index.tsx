import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import stopFillIcon from '@iconify-icons/ph/stop-fill';

import { IMyListeners } from '@src/services/client/ai/types';
// import { IMyListeners } from '@src/services/client/ai/types';
import { API_ADD_RULE } from '@src/services/client/rules';
import { IRules } from '@src/services/client/rules/types';
import { Card, Typography } from '@ui/atoms';
import { BaseButton, IconButton } from '@ui/atoms/BaseButton';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_UPDATE_MY_LISTENERS } from '@src/services/client/ai';
import { Popover } from '@ui/atoms/Popover';
import useSWR from 'swr';
import { E_AI_MY_LISTENERS } from '@src/services/client/ai/endpoint';
import { http } from '@src/services/http';

type PropsType =
  | { isHeader: true; item?: Partial<Record<keyof IMyListeners, string>> }
  | { isHeader?: false; item: IMyListeners };

type StatusPropsType = { isActive: boolean; id: number };

function StopListenerIcon({ id }: any) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { mutate } = useSWR(E_AI_MY_LISTENERS, http.fetcherSWR, {
    revalidateOnFocus: false,
    errorRetryCount: 0,
  });

  const handelSubmit = async () => {
    setLoading(true);
    await API_UPDATE_MY_LISTENERS({
      id,
      is_active: false,
    })
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

function Status({ isActive, id }: StatusPropsType) {
  return (
    <div className="flex justify-center items-center">
      {isActive && <StopListenerIcon id={id} />}
      <Typography color={!isActive ? 'neutral' : 'teal'} size="body3">
        {isActive ? 'در حال انجام' : 'انجام شده'}
      </Typography>
    </div>
  );
}

export function ListenerCard({ item, isHeader }: PropsType) {
  return (
    <Card
      color="neutral"
      className={`${
        !isHeader && 'border-l-[0.2rem] border-teal-600'
      } flex items-center ${isHeader ? 'h-10' : 'h-16 '} px-2 my-2 `}
    >
      <div className="w-2/12 text-center text-neutral-400">
        {!isHeader ? (
          <Status isActive={item.is_active} id={item.id} />
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
