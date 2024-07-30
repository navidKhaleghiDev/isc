import { PropsWithChildren } from 'react';

export function RulesCodeTemplate(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col h-full mt-5 px-5 sm:px-28">
      {props?.children}
    </div>
  );
}
