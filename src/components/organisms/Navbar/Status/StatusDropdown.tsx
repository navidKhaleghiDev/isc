import { useState } from 'react';

import PhHardDrives from '@iconify-icons/ph/hard-drives';
import { IconButton } from '@ui/atoms/BaseButton';
import { BaseDropDown } from '@ui/atoms/BaseDropDown';

import { StatusDropdownContent } from './StatusDropdownContent/StatusDropdownContent';

export function StatusDropdown() {
  const [statusOpen, setStatusOpen] = useState(false);

  const statusHandle = () => {
    setStatusOpen(!statusOpen);
  };

  // const serverOptions = [
  //   {
  //     id: 'server1',
  //     label: 'Server 1',
  //     icon: PhHardDrives,
  //     status: 'expired',
  //   },
  //   {
  //     id: 'server2',
  //     label: 'Server 2',
  //     icon: PhHardDrives,
  //     status: 'disable',
  //   },
  //   {
  //     id: 'server3',
  //     label: 'Server 3',
  //     icon: PhHardDrives,
  //     status: 'active',
  //   },
  //   {
  //     id: 'server4',
  //     label: 'Server 4',
  //     icon: PhHardDrives,
  //     status: 'active',
  //   },
  // ];

  return (
    <div>
      <BaseDropDown
        content={<StatusDropdownContent />}
        buttonContent={
          <IconButton
            size="xxl"
            type="button"
            icon={PhHardDrives}
            onClick={statusHandle}
            className="bg-[#ffffff1a]"
          />
        }
      />
    </div>
  );
}
