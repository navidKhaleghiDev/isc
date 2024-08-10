type NonEmptyString<T extends string> = T extends '' ? never : T;

interface DeleteAction {
  type: 'component';
  header?: string;
  accessor: NonEmptyString<string>;
  actionType: 'delete';
  onDelete: (rowId: string | number) => void;
  openModal: (row?: IData) => void;
  className?: string;
}

interface AddAction {
  type: 'component';
  header?: string;
  accessor: NonEmptyString<string>;
  actionType: 'add';
  onAdd: (rowId: string | number) => void;
  openModal: () => void;
  className?: string;
}

interface MoreAction {
  type: 'component';
  header?: string;
  accessor: NonEmptyString<string>;
  actionType: 'more';
  onMore?: (rowId: string | number) => void;
  moreRoute: string;
  className?: string;
}

interface EditAction {
  type: 'component';
  header?: string;
  accessor: NonEmptyString<string>;
  actionType: 'edit';
  onEdit?: (rowId: string | number) => void;
  editRoute: string;
  className?: string;
}

type ComponentAction = DeleteAction | AddAction | MoreAction | EditAction;

interface FullNameColumn {
  type: 'fullName';
  header: string;
  accessor: string[];
  className?: string;
}

interface DefaultColumn {
  type: 'default';
  header: string;
  accessor: NonEmptyString<string>;
  className?: string;
}

interface DateColumn {
  type: 'date';
  header: string;
  accessor: NonEmptyString<string>;
  className?: string;
}

export type Column =
  | ComponentAction
  | FullNameColumn
  | DefaultColumn
  | DateColumn;

export interface IData {
  [key: string]: any;
}

export interface ITableProps {
  columns: Column[];
  data: IData[];
  containerClassName?: string;
  tableClassName?: string;
}

export interface ICellProps {
  row: IData;
  column: Column;
  cellKey: string | number;
}
