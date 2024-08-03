import { Typography } from '@ui/atoms';
import { ICellProps } from '../types';

export function DefaultCell({ row, column, cellKey }: ICellProps) {
  let userType;

  if (row.is_superuser) {
    userType = 'ادمین ارشد';
  } else if (row.is_analyser) {
    userType = 'ادمین سیستم نظارتی';
  } else if (row.is_admin) {
    userType = 'ادمین';
  }

  const accessor = column.accessor as string;
  return (
    <td
      key={cellKey}
      className="first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg overflow-hidden"
    >
      <Typography size="body5" weight="normal">
        {accessor === 'userType' ? userType : row[accessor]}
      </Typography>
    </td>
  );
}
