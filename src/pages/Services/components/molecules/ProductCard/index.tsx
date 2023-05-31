import { Card, Typography } from '@ui/atoms';

export function ProductCard() {
  return (
    <Card
      color="neutral"
      className="border-l-[0.2rem] border-teal-600 flex h-28 items-center px-2 my-2"
    >
      <div className="flex w-full justify-end">
        <div className="ml-4">
          <Typography color="teal" size="body2" type="div">
            Rule name
          </Typography>
          <Typography className="text-neutral-400" size="body2" type="div">
            Rule name
          </Typography>
        </div>
        <div className="bg-teal-500 h-24 w-36 rounded-md" />
      </div>
    </Card>
  );
}
