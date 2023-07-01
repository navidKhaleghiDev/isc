import { Card, Typography, BaseButton } from '@ui/atoms';
import { useUserContext } from '@context/user/userContext';
import { Modal } from '@ui/molecules/Modal';
import { useState } from 'react';
import { AuthenticationForm } from '@src/pages/Login/AuthenticationForm';
import { RegisterSerialDeviceForm } from '@src/pages/Login/RegisterSerialDeviceForm';

type PropsType = { title: string; isUserAuth: boolean };

export function NotCompletedAuth({ title, isUserAuth }: PropsType) {
  const { user, setUser } = useUserContext();
  const [openModalAssignSerial, setOpenModalAssignSerial] = useState(false);
  const [openModalUserAuth, setOpenModalUserAuth] = useState(false);

  const handleOnSuccessAddSerial = (serial: string) => {
    if (user) {
      const newUser = { ...user, device_serial: serial };
      setUser(newUser);
    }
  };

  const handleOnSuccessUserAuthentication = () => {
    if (user) {
      const newUser = { ...user, is_authenticated: true };
      setUser(newUser);
      setOpenModalUserAuth(false);
    }
  };

  const handleUnSuccessUserAuth = () => {
    setOpenModalUserAuth(false);
    setOpenModalAssignSerial(true);
  };

  const handleClickButton = () => {
    if (!isUserAuth) {
      setOpenModalUserAuth(true);
    } else {
      setOpenModalAssignSerial(true);
    }
  };

  return (
    <>
      <Card
        color="neutral"
        className="flex flex-col justify-around items-center bg-neutral-200 h-48"
      >
        <Typography color="neutral" size="body3">
          {!isUserAuth
            ? `برای مشاهده ${title} لطفا احراز هویت را انجام دهید`
            : `برای مشاهده ${title} لطفا سریال دستگاه خود را وارد نماپید`}
        </Typography>
        <BaseButton
          label={!isUserAuth ? 'ثبت احراز هویت' : 'ثبت سریال دستگاه'}
          size="lg"
          type="secondary"
          onClick={handleClickButton}
        />
      </Card>
      <Modal
        open={openModalAssignSerial}
        setOpen={setOpenModalAssignSerial}
        type="none"
        classContainer="border border-teal-600"
        content={
          <div className="p-5 ">
            <RegisterSerialDeviceForm
              updateProfile={handleOnSuccessAddSerial}
              onChangeStep={() => true}
              getProfile={() => true}
            />
          </div>
        }
      />
      <Modal
        open={openModalUserAuth}
        setOpen={setOpenModalUserAuth}
        type="none"
        classContainer="border border-teal-600"
        content={
          <div className="p-5 ">
            <AuthenticationForm
              getProfile={handleOnSuccessUserAuthentication}
              onChangeStep={() => handleUnSuccessUserAuth()}
            />
          </div>
        }
      />
    </>
  );
}
