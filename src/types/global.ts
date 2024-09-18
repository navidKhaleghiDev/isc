import { IconifyIcon } from '@iconify/react';

export type IconType = string | IconifyIcon;

export type QueryParams<T> = {
  [K in keyof T]?: T[K];
};
