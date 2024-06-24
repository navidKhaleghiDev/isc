import { objectToUrlParameters } from '@src/helper/utils/urlParameters';

const BASE_URL = 'Ai';

// static URLs
export const E_AI_MY_LISTENERS = `/${BASE_URL}/my_listeners/`;
export const E_AI_MY_LEARNER = `/${BASE_URL}/my_learner/`;
export const E_AI_MY_DETECTOR = `/${BASE_URL}/my_detectioner/`;
export const E_AI_ALL_OBJECTS_INFO = `/${BASE_URL}/all_objects_info/`;
export const E_AI_INTERFACES_LIST = `/${BASE_URL}/interfaces_list/`;

// Dynamic URLs
export const E_AI_LEARNING_DATA_PERIOD = (id: string) =>
  `${BASE_URL}/learning_data_period/${id}/`;

export const E_AI_MY_LEARNER_RETRIEVE = (id: string) => `Ai/my_learner/${id}/`;

export const E_AI_MY_DETECTOR_RETRIEVE = (id: string) =>
  `${BASE_URL}/my_detectioner/${id}/`;

export const E_AI_MY_LISTENERS_PAGINATION = <T>(filters?: Partial<T>): string =>
  filters
    ? `/${BASE_URL}/my_listeners/?${objectToUrlParameters(filters)}`
    : `/${BASE_URL}/my_listeners/`;

export const E_AI_MY_DETECTOR_PAGINATION = <T>(filters?: Partial<T>): string =>
  filters
    ? `/${BASE_URL}/my_detectioner/?${objectToUrlParameters(filters)}`
    : `/${BASE_URL}/my_detectioner/`;

export const E_AI_MY_DETECTOR_DATA = <T>(
  detectionId: number,
  filters?: Partial<T>
): string =>
  filters
    ? `/${BASE_URL}/my_detection_data/?detection_id=${detectionId}&${objectToUrlParameters(
        filters
      )}`
    : `/${BASE_URL}/my_detection_data/?detection_id=${detectionId}`;

export const E_AI_MY_LEARNER_PAGINATION = <T>(filters?: Partial<T>): string =>
  filters
    ? `/${BASE_URL}/my_learner/?${objectToUrlParameters(filters)}`
    : `/${BASE_URL}/my_learner/`;

export const E_AI_UPDATE_MY_LISTENERS = (id: string) =>
  `/${BASE_URL}/my_listeners/${id}/`;

export const E_AI_UPDATE_MY_DETECTOR = (id: number) =>
  `/${BASE_URL}/my_detectioner/${id}/`;

export const E_AI_MODEL_LEARNING_DIAGRAM = (id: string) =>
  `/${BASE_URL}Ai/model_learning_diagram/${id}/`;
