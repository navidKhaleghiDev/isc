import { Typography } from '@ui/atoms';

export function NoResult() {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center">
      <img src="/no-results.svg" alt="no result" />
      <Typography>موردی یافت نشد</Typography>
    </div>
  );
}
