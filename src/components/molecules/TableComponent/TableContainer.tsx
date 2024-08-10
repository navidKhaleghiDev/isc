import { TableTHead } from './TableTHead';
import { TableTBody } from './TableTBody';
import { ITableProps } from './types';

/**
 * TableContainer Component
 *
 * A container component for rendering a table with a header and body.
 *
 * @component
 *
 * @param {Object} props - The props for the TableContainer component.
 * @param {Array} props.columns - An array of column definitions.
 * @param {Array} props.data - An array of data to be displayed in the table.
 * @param {string} [props.containerClassName] - Additional class names for the parent table.
 * @param {string} [props.tableClassName] - Additional class names for the table tag.
 *
 * @returns {JSX.Element} The rendered table container component.
 */
export function TableContainer({
  columns,
  data,
  containerClassName,
  tableClassName,
}: ITableProps): JSX.Element {
  return (
    <div className={containerClassName}>
      <table className={tableClassName}>
        <TableTHead columns={columns} />
        <TableTBody data={data} columns={columns} />
      </table>
    </div>
  );
}
