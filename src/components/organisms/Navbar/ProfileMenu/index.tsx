import { useState } from 'react';
import User from '@iconify-icons/ph/user';
import { IconButton } from '@ui/atoms/BaseButton';
import { BaseDropDown } from '@ui/atoms/BaseDropDown';

import { DrawerProfile } from './DrawerProfile';
import { ProfileMenuContent } from './ProfileMenuContent';

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => setIsOpen(!isOpen);

  return (
    <div>
      <BaseDropDown
        content={<ProfileMenuContent />}
        buttonContent={
          <IconButton
            icon={User}
            size="md"
            type="button"
            className="bg-[#ffffff1a]"
          />
        }
        className="hidden sm:block"
      />
      <IconButton
        size="md"
        type="button"
        color="neutralNoBg"
        icon={User}
        className="hover:bg-neutral-300 transition-all duration-700 ease-linear block sm:hidden"
        onClick={toggleProfile}
      />
      <div>
        <DrawerProfile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
