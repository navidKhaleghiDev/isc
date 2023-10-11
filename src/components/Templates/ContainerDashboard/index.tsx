import { PropsWithChildren } from 'react';

export function ContainerDashboard({ children }: PropsWithChildren) {
  return <div className="w-full min-h-full p-16 ">{children}</div>;
}
