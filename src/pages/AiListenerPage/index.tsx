import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { PageBackButton } from '@ui/atoms/BackButton';
import { StartListener } from './StartListener';
import { ListenerList } from './ListenerList';

export function AiListenerPage() {
  return (
    <ContainerDashboard>
      <StartListener />
      <ListenerList />
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
