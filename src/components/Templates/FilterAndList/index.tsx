/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren } from 'react';
import { FilterServices } from './components/molecules/Filter';

interface PropsType extends PropsWithChildren {
  withIps?: boolean;
}
export function FilterAndList({ children, withIps }: PropsType) {
  return (
    <div className="w-full flex flex-col h-full py-6 px-24">
      <FilterServices withIps={withIps} />
      {children}
    </div>
  );
}
