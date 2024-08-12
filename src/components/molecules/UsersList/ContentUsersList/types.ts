import { IData } from '@ui/molecules/TableComponent/types';

export interface ContentUsersListProps {
  data: IData[];
  handleMutate: () => void;
  isLoading: boolean;
}
