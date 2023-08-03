import { useNavigate } from 'react-router-dom';
import { IconButton } from '../BaseButton';

export function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <IconButton
      onClick={handleClick}
      icon="ep:back"
      size="xl"
      type="button"
      color="teal"
    />
  );
}
