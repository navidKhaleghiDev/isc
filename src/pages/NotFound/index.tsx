import { BaseButton } from '@ui/atoms/BaseButton';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div
      dir="ltr"
      className="p-16 h-screen flex flex-col justify-center items-center"
    >
      <h1 className="">Not Found</h1>
      <p>Oops! page not found.</p>
      <Link to="/">
        <BaseButton
          className="mt-6"
          label="go to home"
          type="default"
          size="lg"
        />
      </Link>
    </div>
  );
}

export default NotFoundPage;
