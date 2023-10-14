import { objectToUrlParameters } from '@src/helper/utils/urlParameters';
import { QueryParams } from '@src/types/global';

export const E_AI_MY_LISTENERS = '/Ai/my_listeners/';

export const E_AI_MY_LEARNER = '/Ai/my_learner/';

export const E_AI_LEARNING_DATA_PERIOD = (id: string) =>
  `Ai/learning_data_period/${id}/`;

export const E_AI_MY_LEARNER_RETRIEVE = (id: string) => `Ai/my_learner/${id}/`;

export const E_AI_MY_LISTENERS_PAGINATION = <T>(
  filters?: QueryParams<T>
): string =>
  filters
    ? `/Ai/my_listeners/?${objectToUrlParameters(filters)}`
    : '/Ai/my_listeners/';

export const E_AI_MY_LEARNER_PAGINATION = <T>(
  filters?: QueryParams<T>
): string =>
  filters
    ? `/Ai/my_learner/?${objectToUrlParameters(filters)}`
    : '/Ai/my_learner/';
// export const E_AI_MY_LISTENERS_PAGINATION = ({
//   pageSize,
//   page,
//   filter,
// }: IPagination) =>
//   `/Ai/my_listeners/${
//     filter ? `?${filter}&` : '?'
//   }page_size=${pageSize}&page=${page}`;

export const E_AI_UPDATE_MY_LISTENERS = (id: string) =>
  `/Ai/my_listeners/${id}/`;

export const E_AI_MODEL_LEARNING_DIAGRAM = (id: string) =>
  `/Ai/model_learning_diagram/${id}/`;
