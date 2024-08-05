import { useState } from 'react';

import User from '@iconify-icons/ph/user';
import { IconButton } from '@ui/atoms/BaseButton';
import { DropdownProfile } from './DropdownProfile';
import { DrawerProfile } from './DrawerProfile';

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfileDrop = () => setIsOpen(!isOpen);

  return (
    <div>
      <IconButton
        size="xxl"
        type="button"
        color="neutralLight"
        icon={User}
        className="w-10 h-10 rounded-lg hover:bg-neutral-300 transition-all duration-700 ease-linear"
        onClick={toggleProfileDrop}
      />
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <DropdownProfile setIsOpen={setIsOpen} />
      </div>
      <div>
        <DrawerProfile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
