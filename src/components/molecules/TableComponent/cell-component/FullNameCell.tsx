import { Typography } from '@ui/atoms';
import { ICellProps } from '../types';

export function FullNameCell({ cellKey, column, row }: ICellProps) {
  const [firstKey, secondKey] = column.accessor;
  return (
    <td
      key={cellKey}
      className="first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg overflow-hidden"
    >
      <Typography size="body5" weight="normal">
        {row[firstKey]} {row[secondKey]}
      </Typography>
    </td>
  );
}
