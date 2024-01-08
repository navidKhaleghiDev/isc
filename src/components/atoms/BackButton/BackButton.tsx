import { useLocation, useNavigate } from 'react-router-dom';
import { BaseButton, IconButton } from '../BaseButton';

export type BackButtonProps = {
  withLabel?: boolean;
  onClick?: () => void;
  backToReferrer?: boolean;
};

export function BackButton({
  withLabel,
  onClick,
  backToReferrer,
}: BackButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (!onClick) {
      // Navigate to the new path
      if (backToReferrer) {
        navigate(-1);
      } else {
        const segments = location.pathname.split('/');
        const backSlug = segments.slice(0, -1).join('/');
        navigate(backSlug);
      }
    } else {
      onClick();
    }
  };

  return !withLabel ? (
    <IconButton
      onClick={handleClick}
      icon="ep:back"
      size="xl"
      type="button"
      color="teal"
    />
  ) : (
    <BaseButton
      label="صفحه قبل"
      onClick={handleClick}
      endIcon="ph:arrow-line-left"
    />
  );
}
