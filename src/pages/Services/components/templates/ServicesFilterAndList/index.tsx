/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren } from 'react';
import { Pagination } from '@ui/molecules/Pagination';
import { FilterServices } from '../../molecules/Filter';

export function ServicesFilterAndList(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <FilterServices />
      {props?.children}
      <Pagination />
    </div>
  );
}
