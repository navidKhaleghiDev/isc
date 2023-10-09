import { IPagination } from '@src/types/services';

export const E_AI_MY_LISTENERS = '/Ai/my_listeners/';

export const E_AI_MY_LISTENERS_PAGINATION = ({
  pageSize,
  page,
  filter,
}: IPagination) =>
  `/Ai/my_listeners/${
    filter ? `?${filter}&` : '?'
  }page_size=${pageSize}&page=${page}`;

export const E_AI_UPDATE_MY_LISTENERS = (id: string) =>
  `/Ai/my_listeners/${id}/`;
