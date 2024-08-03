import { PropsWithChildren } from 'react';

export function RulesCodeTemplate(props: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col md:px-16 h-full">
      {props?.children}
    </div>
  );
}
