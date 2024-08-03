import { Typography } from '@ui/atoms';
import { Column } from './types';

interface ITableTHeadProps {
  columns: Column[];
}

export function TableTHead({ columns }: ITableTHeadProps) {
  return (
    <thead className="bg-neutral-200 h-12 rounded-lg overflow-hidden">
      <tr className="overflow-hidden">
        {columns ? (
          columns.map((column) => (
            <th
              key={column.type + column.accessor}
              className="first-of-type:rounded-br-lg last-of-type:rounded-bl-lg"
            >
              <Typography size="body4" weight="medium">
                {column.header}
              </Typography>
            </th>
          ))
        ) : (
          <div>loading ...</div>
        )}
      </tr>
    </thead>
  );
}
