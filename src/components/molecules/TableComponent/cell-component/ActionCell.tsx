import DotsThreeVertical from '@iconify-icons/ph/dots-three-vertical';
import PencilSimple from '@iconify-icons/ph/pencil-simple';
import { Link } from 'react-router-dom';
import { IconButton } from '@ui/atoms/BaseButton';
import { useUserContext } from '@context/user/userContext';

import { ICellProps } from '../types';
import { cellStyles } from '../styles';

export function ActionCell({ cellKey, column, row }: ICellProps) {
  const { user: currentUser } = useUserContext();

  if (column.type !== 'component') {
    return null;
  }

  let cellContent;

  switch (column.actionType) {
    case 'delete':
      cellContent = (
        <IconButton
          icon="ph:trash-simple"
          color="redNoBg"
          onClick={() => {
            column.onDelete(row.id);
            column.openModal(row);
          }}
          size="xxl"
        />
      );
      break;
    case 'add':
      cellContent = (
        <IconButton
          icon="ph:plus"
          color="teal"
          onClick={() => {
            column.onAdd(row.id);
            column.openModal();
          }}
          size="xxl"
        />
      );
      break;
    case 'more':
      cellContent = (
        <Link to={`${column.moreRoute}`} className="w-0">
          <IconButton
            icon={DotsThreeVertical}
            color="neutral"
            type="button"
            size="xxl"
          />
        </Link>
      );
      break;
    case 'edit':
      cellContent = (
        <Link
          to={`${column.editRoute} ${row.id}`}
        >
          <IconButton
            icon={PencilSimple}
            color="default"
            type="button"
            size="xxl"
          />
        </Link>
      );
      break;
    default:
      cellContent = null;
  }

  return (
    <td key={cellKey} className={`${cellStyles()} ${column?.className}`}>
      {row.email !== currentUser?.email && cellContent}
    </td>
  );
}
