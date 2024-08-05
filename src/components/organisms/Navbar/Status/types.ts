import { IconifyIcon } from '@iconify/react';

export interface DropdownProps {
  options: {
    [x: string]: string | IconifyIcon | undefined;
    id: string;
    label: string;
    status: string;
  }[];
  isOpen: boolean;
  icon?: string | IconifyIcon;
  toggleDropdown: (isOpen: boolean) => void;
}
