import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1 className="bg-blue-100">Not Found</h1>
      <Link to="/">
        <BaseButton label="home" intent="danger" />
      </Link>
    </>
  );
}

export default NotFound;
