import ToolTip from '../Tooltip';
import { BackButton } from './BackButton';

export function PageBackButton() {
  return (
    <div className="flex justify-end mb-4">
      <ToolTip tooltip="صفحه قبل" position="right">
        <BackButton />
      </ToolTip>
    </div>
  );
}
