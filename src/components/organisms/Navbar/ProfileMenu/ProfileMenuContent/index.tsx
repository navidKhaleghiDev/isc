import React from 'react';
import User from '@iconify-icons/ph/user';
import PhUserCirclePlus from '@iconify-icons/ph/user-circle-plus';
import PhGearSix from '@iconify-icons/ph/gear-six';
import PhSignOut from '@iconify-icons/ph/sign-out';
import { Typography } from '@ui/atoms';
import { Avatar } from '@ui/atoms/Avatar';
import { LinkButton } from '@ui/atoms/LinkButton';
import { useUserContext } from '@context/user/userContext';
import { getRoleUser } from '@ui/organisms/Navbar/NavbarDashboard/utils';
import { http } from '@src/services/http';

type ProfileMenuContentProps = {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ProfileMenuContent({ setIsOpen }: ProfileMenuContentProps) {
  const { user } = useUserContext();
  const { setUser } = useUserContext();

  const handleClick = () => setIsOpen?.(false);

  return (
    <div className="box-border p-7 sm:h-[18.5rem] h-full sm:w-64 bg-white sm:shadow-sm sm:rounded-lg">
      <div className="flex gap-2 sm:p-0 pb-4">
        <Avatar icon={User} intent="inactive" size="sm" />
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
      <div className="sm:py-[1.938rem] pt-4 border-t-2 h-4/5 border-t-neutral-300 sm:border-none flex flex-col items-start justify-between sm:justify-normal">
        <div className="flex flex-col items-start">
          <LinkButton
            link="/"
            startIcon={PhUserCirclePlus}
            label="تنظیمات کاربران"
            type="neutral"
            size="sm"
            fullWidth
            onClick={handleClick}
          />

          <LinkButton
            link="/"
            startIcon={PhGearSix}
            label="تنظیمات"
            type="neutral"
            size="sm"
            fullWidth
            onClick={handleClick}
          />
        </div>
        <div className="mb-5">
          <LinkButton
            link="/"
            startIcon={PhSignOut}
            label="خروج از حساب کاربری"
            type="red"
            size="sm"
            fullWidth
            onClick={() => {
              http.removeAuthHeader();
              setUser(null);
            }}
          />
        </div>
      </div>
    </div>
  );
}
