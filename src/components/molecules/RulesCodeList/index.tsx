import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation } from 'react-router-dom';
import { CodeLine } from './CodeLine';
import { TitleMyProduct } from '../TitleMyProduct';

export function RulesCodeList() {
  const location = useLocation();
  console.log({ location });

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        <div>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="تعداد قوانین" />
            <Typography color="teal" size="h6" className="mr-auto">
              dfdsf
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="تعداد قوانین" />
            <Typography color="teal" size="h6" className="mr-auto">
              dfdsf
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 ">
            <TitleMyProduct title="تعداد قوانین" />
            <Typography color="teal" size="h6" className="mr-auto">
              dfdsf
            </Typography>
          </Card>
        </div>
        <div className="col-span-2 bg-red-300">dsfds</div>
      </div>

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
      <div className="w-full mt-3 flex justify-end">
        <BaseButton label="ثبت" size="sm" />
      </div>
    </>
  );
}
