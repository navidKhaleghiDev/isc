import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { StartListener } from './StartListener';
import { ListenerList } from './ListenerList';

export function AiPage() {
  return (
    <ContainerDashboard>
      <StartListener />
      <ListenerList />
    </ContainerDashboard>
  );
}
