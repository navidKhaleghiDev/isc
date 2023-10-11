import { ContainerDashboard } from '@ui/Templates/ContainerDashboard';
import { PageBackButton } from '@ui/atoms/BackButton';
import { StartLearner } from './StartLearner';
import { LearnerList } from './LearnerList';

export function AiLearnerPage() {
  return (
    <ContainerDashboard>
      <StartLearner />
      <LearnerList />
      <div className="absolute bottom-10 left-10">
        <PageBackButton withLabel />
      </div>
    </ContainerDashboard>
  );
}
