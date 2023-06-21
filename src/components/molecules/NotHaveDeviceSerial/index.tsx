import { Card, Typography, BaseButton } from '@ui/atoms';
import { useUserContext } from '@context/user/userContext';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { UpdateSerialDevice } from '@src/pages/Login/LoginForm/UpdateSerialDevice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type PropsType = { title: string };
export function NotHaveDeviceSerial({ title }: PropsType) {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const [openModalAssignSerial, setOpenModalAssignSerial] = useState(false);

  const handleOnSuccessAddSerial = (serial: string) => {
    if (user) {
      const newUser = { ...user, device_serial: serial };
      toast.success('سریال با موفقیت ثبت شد');
      setUser(newUser);
    }
  };

  return (
    <>
      <Card
        color="neutral"
        className="flex flex-col justify-around items-center bg-neutral-200 h-48"
      >
        <Typography color="neutral" size="body3">
          {`برای مشاهده ${title} لطفا سریال دستگاه خود را وارد نماپید`}
        </Typography>
        <BaseButton
          label="ثبت سریال دستگاه"
          size="lg"
          type="secondary"
          onClick={() => setOpenModalAssignSerial(true)}
        />
      </Card>
      <Modal
        open={openModalAssignSerial}
        setOpen={setOpenModalAssignSerial}
        type="none"
        classContainer="border border-teal-600"
        content={
          <UpdateSerialDevice
            onCloseModal={() => setOpenModalAssignSerial(false)}
            onSuccessAdd={handleOnSuccessAddSerial}
          />
        }
      />
    </>
  );
}
