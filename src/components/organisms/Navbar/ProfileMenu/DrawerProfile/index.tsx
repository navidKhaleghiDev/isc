import React from 'react';
import x from '@iconify-icons/ph/x';
import { IconButton } from '@ui/atoms/BaseButton';

import { ProfileMenuContent } from '../ProfileMenuContent';

type DrawerProfileProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DrawerProfile({ isOpen, setIsOpen }: DrawerProfileProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-20 w-full h-full bg-white sm:hidden block transition-transform duration-500 delay-500 ${
        isOpen ? '-translate-x-0 ' : '-translate-x-full'
      }`}
    >
      <div className="h-full">
        <div className="pt-[2.625rem] pb-5 px-5 ">
          <IconButton
            icon={x}
            size="md"
            color="neutral"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ProfileMenuContent setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
