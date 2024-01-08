import ToolTip from '../Tooltip';
import { BackButton, BackButtonProps } from './BackButton';

export function PageBackButton({
  withLabel,
  onClick,
  backToReferrer,
}: BackButtonProps) {
  return !withLabel ? (
    <ToolTip tooltip="صفحه قبل" position="right">
      <BackButton />
    </ToolTip>
  ) : (
    <BackButton
      withLabel={withLabel}
      onClick={onClick}
      backToReferrer={backToReferrer}
    />
  );
}
