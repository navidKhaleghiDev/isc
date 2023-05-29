import { useState } from 'react';
import { Typography } from '@ui/atoms/Typography';
import { BaseIcon } from '@ui/atoms/BaseIcon';
import { INavigation, navigationSideBar } from './navigation';
import { NavAccordion } from './NavAccordion';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function SideBar() {
  const [open, setOpen] = useState<number | null>(null);
  const handleOpen = (value: number | null) => {
    setOpen(value);
  };
  return (
    <div className="flex flex-col items-center w-full h-full overflow-hidden text-gray-700 dark:bg-gray-500 rounded">
      <div className="flex flex-col items-center w-full mt-10 px-4">
        {navigationSideBar.map((item: INavigation, i: number) =>
          !item.items ? (
            <a
              className="flex fill-current hover:text-sky-600 items-center  w-full h-10 px-3 my-2 rounded hover:bg-neutral-100 hover:text-sky-600"
              href="#"
              key={item.id}
            >
              {item.icon && <BaseIcon icon={item.icon} />}
              <Typography className="mr-3">{item.label}</Typography>
            </a>
          ) : (
            <NavAccordion
              key={item.id}
              item={item}
              open={open}
              setOpen={handleOpen}
              index={i}
            />
          )
        )}
        <a
          className="flex items-center w-full h-10 pr-3 my-2 rounded hover:bg-neutral-100 hover:text-sky-600"
          href="#"
        >
          <BaseIcon icon="material-symbols:logout-sharp" color="error" />
          <Typography color="error" className="mr-3">
            خروج
          </Typography>
        </a>
      </div>
    </div>
  );
}
