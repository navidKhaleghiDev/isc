import { IconifyIcon } from '@iconify/react';

export interface DropdownProps {
  options: {
    [x: string]: string | IconifyIcon | undefined;
    id: string;
    label: string;
    status: string;
  }[];
  // isOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  icon?: string | IconifyIcon;
}
