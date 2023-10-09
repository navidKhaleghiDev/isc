import { PropsWithChildren } from 'react';

export function ContainerDashboard({ children }: PropsWithChildren) {
  return <div className="w-full box-border p-16 relative">{children}</div>;
}
