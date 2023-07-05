import { Typography } from '@ui/atoms';

export function NoResult() {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <img src="/not-found.jpg" alt="not found" />
      <Typography>موردی یافت نشد</Typography>
    </div>
  );
}
