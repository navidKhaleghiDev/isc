import { Typography } from '@ui/atoms';

type PropsType = {
  isPage?: boolean;
  description?: string;
};
export function NoResult({ isPage, description }: PropsType) {
  return (
    <div
      className={`w-full ${
        isPage ? 'min-h-full' : 'h-64'
      } flex flex-col justify-center items-center`}
    >
      <img src="/not-found.jpg" alt="not found" />
      {description ? (
        <Typography>{description}</Typography>
      ) : (
        <Typography>موردی یافت نشد</Typography>
      )}{' '}
    </div>
  );
}
