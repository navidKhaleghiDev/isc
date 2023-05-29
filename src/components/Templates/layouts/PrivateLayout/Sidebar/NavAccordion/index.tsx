/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { BaseIcon, Typography } from '@ui/atoms';
import { INavigation } from '../navigation';

type PropsType = {
  open: number | null;
  setOpen: (open: number | null) => void;
  index: number;
  item: INavigation;
};
/* eslint-disable jsx-a11y/label-has-associated-control */
export function NavAccordion({ open, setOpen, index, item }: PropsType) {
  return (
    <>
      <a
        href="#"
        className="flex items-center w-full h-10 pr-3 mt-2 rounded hover:bg-neutral-100 hover:text-sky-600"
        onClick={() => setOpen(open === index ? null : index)}
      >
        <BaseIcon icon="fluent-mdl2:product" />
        <Typography className="mr-3">{item.label}</Typography>
        <BaseIcon
          icon="iconamoon:arrow-left-2-light"
          className={open === index ? '-rotate-90' : ''}
        />
      </a>
      <div className={`${open !== index && 'hidden'} w-full`}>
        {item.items?.map((i: INavigation) => (
          <Typography
            className="bg-sky-400 rounded-lg my-2 px-2 py-1 text-white"
            key={i.id}
          >
            {i.label}
          </Typography>
        ))}
      </div>
    </>
  );
}
