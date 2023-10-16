import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { PageBackButton } from '@ui/atoms/BackButton';
import { StartDetect } from './StartDetect';
import { DetectorList } from './DetectorList';

export function AiDetectorPage() {
  return (
    <ContainerDashboard>
      <div className="flex flex-col h-full justify-between items-center">
        <StartDetect />
        <DetectorList />
      </div>
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
