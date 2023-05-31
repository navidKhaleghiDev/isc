/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren } from 'react';

export function RulesCodeTemplate(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col h-full pt-16 px-24">
      {props?.children}
    </div>
  );
}
