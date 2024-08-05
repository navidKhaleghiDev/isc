import React from 'react';
import { ProfileMenuContent } from '../ProfileMenuContent';

type DropdownProfileProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DropdownProfile({ setIsOpen }: DropdownProfileProps) {
  return (
    <div className="relative sm:block hidden">
      <div className="absolute top-0 left-0 mt-2 z-20 h-[18.5rem] shadow-sm rounded-lg w-64 bg-white">
        <ProfileMenuContent setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
