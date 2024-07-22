import { BaseButton, Card, Typography } from '@ui/atoms';
import { Avatar } from '@ui/atoms/Avatar';
import { useNavigate } from 'react-router-dom';
import User from '@iconify-icons/ph/user';
import PhKey from '@iconify-icons/ph/key';
import PhUserCirclePlus from '@iconify-icons/ph/user-circle-plus';
import PhGearSix from '@iconify-icons/ph/gear-six';
import PhSignOut from '@iconify-icons/ph/sign-out';
import { ReactNode } from 'react';
import { useUserContext } from '@context/user/userContext';
import { getRoleUser } from '@ui/organisms/Navbar/NavbarDashboard/utils';
import { ROUTES_PATH } from '@src/routes/routesConstants';
import { http } from '@src/services/http';

export function ProfileDropdown(): ReactNode {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  return (
    <Card shadow="sm" className="p-7 box-border w-64 h-[18.5rem] rounded-lg">
      <div className="flex gap-2">
        <Avatar icon={User} intent="grey" size="sm" />
        <div>
          <span>
            <Typography size="body5">
              {getRoleUser(user?.is_superuser, user?.is_admin)}
            </Typography>
          </span>
          <span>
            <Typography size="body6" color="neutral_light">
              {user?.first_name || user?.last_name
                ? `${user?.first_name} ${user?.last_name}`
                : user?.email}
            </Typography>
          </span>
        </div>
      </div>
      <div className="py-[30px]">
        <BaseButton
          startIcon={PhKey}
          label="تغییر رمز عبور"
          type="neutral"
          size="sm"
          fullWidth
          className="!justify-start"
          onClick={() => navigate(ROUTES_PATH.addUser)}
        />
        <BaseButton
          startIcon={PhUserCirclePlus}
          label="اضافه کردن کاربر جدید"
          type="neutral"
          size="sm"
          fullWidth
          className="!justify-start"
          onClick={() => navigate(ROUTES_PATH.addUser)}
        />
        <BaseButton
          startIcon={PhGearSix}
          label="تنظمیات"
          type="neutral"
          size="sm"
          fullWidth
          className="!justify-start"
          onClick={() => navigate(ROUTES_PATH.settings)}
        />
        <BaseButton
          startIcon={PhSignOut}
          label="خروج از حساب کاربری"
          type="red"
          size="sm"
          fullWidth
          className="!justify-start"
          onClick={() => {
            http.removeAuthHeader();
            setUser(null);
            navigate(ROUTES_PATH.login);
          }}
        />
      </div>
    </Card>
  );
}
