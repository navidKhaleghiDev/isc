import { Typography } from '@ui/atoms';

import { ICellProps } from '../types';
import { cellStyles } from '../styles';

export function DefaultCell({ row, column, cellKey }: ICellProps) {
  let userType;

  if (row.is_analyser && !row.is_admin) {
    userType = 'ادمین سیستم نظارتی';
  } else if (row.is_admin && !row.is_superuser) {
    userType = 'ادمین';
  } else if (row.is_superuser) {
    userType = 'ادمین ارشد';
  }

  const accessor = column.accessor as string;
  return (
    <td
      key={cellKey}
      className={`${cellStyles()} ${column?.className}`}
      align={column.align}
    >
      <Typography size="body5" weight="normal">
        {accessor === 'userType' ? userType : row[accessor]}
      </Typography>
    </td>
  );
}
