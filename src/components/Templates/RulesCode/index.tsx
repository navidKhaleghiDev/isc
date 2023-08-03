import { PropsWithChildren } from 'react';

export function RulesCodeTemplate(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col h-full p-16">{props?.children}</div>
  );
}
