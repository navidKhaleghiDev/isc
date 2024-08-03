import { TableTHead } from './TableTHead';
import { TableTBody } from './TableTBody';
import { ITableProps } from './types';

export function TableContainer({ columns, data }: ITableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto rounded-lg overflow-hidden">
        <TableTHead columns={columns} />
        <TableTBody data={data} columns={columns} />
      </table>
    </div>
  );
}
