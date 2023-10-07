import { PropsWithChildren } from 'react';

export function ContainerDashboard({ children }: PropsWithChildren) {
  return <div className="w-full h-full flex flex-col p-16">{children}</div>;
}
