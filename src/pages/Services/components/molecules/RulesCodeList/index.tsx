import { Card, Typography } from '@ui/atoms';
import { CodeLine } from './CodeLine';

export function RulesCodeList() {
  return (
    <>
      <Typography
        className="w-full flex text-left justify-end "
        size="h3"
        color="teal"
      >
        Rule name
      </Typography>
      <Card color="neutral" className="p-8 h-[41rem] overflow-y-auto">
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((code: any) => {
            return <CodeLine key={code} />;
          })}
        </>
      </Card>
    </>
  );
}
