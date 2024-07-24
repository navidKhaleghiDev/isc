import { PropsWithChildren } from 'react';

export function RulesCodeTemplate(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col h-full mt-10 px-28">
      {props?.children}
    </div>
  );
}
