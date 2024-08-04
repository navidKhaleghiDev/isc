import ToolTip from '../Tooltip';
import { BackButton, BackButtonProps } from './BackButton';

/**
 * PageBackButton component
 *
 * This component renders a back button that optionally displays that can be rendered with label and without label.
 *
 * @component
 *
 * @param {BackButtonProps} props - The props for the PageBackButton component.
 * @param {boolean} props.withLabel - Whether to show a label with the back button.
 * @param {() => void} [props.onClick] - The click handler for the back button.
 * @param {boolean} [props.backToReferrer] - Whether to navigate back to the referrer.
 *
 * @returns {JSX.Element} The rendered PageBackButton component.
 */

export function PageBackButton({
  withLabel,
  onClick,
  backToReferrer,
}: BackButtonProps) {
  return !withLabel ? (
    <ToolTip tooltip="صفحه قبل" position="left">
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
