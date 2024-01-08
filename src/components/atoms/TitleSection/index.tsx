import { Typography } from '@ui/atoms';

export function TitleSection({ label }: { label: string }) {
  return (
    <Typography
      color="neutral"
      size="h5"
      className="w-full my-4 col-span-12 text-left uppercase"
    >
      {label}
    </Typography>
  );
}
