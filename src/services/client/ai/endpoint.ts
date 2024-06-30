import { objectToUrlParameters } from '@src/helper/utils/urlParameters';
import { EndPoints } from './types';

/**
 * Constructs an AI endpoint URL based on the provided parameters.
 *
 * @template T - The type for the filters parameter.
 * @param {EndPoints} endpoint - The specific endpoint to be used.
 * @param {string|number} [id] - Optional ID to be included in the URL.
 * @param {Partial<T>} [filters] - Optional filters to be included in the URL as query parameters.
 * @returns {string} The constructed URL.
 */

export const aiEndPoint = <T>(
  endpoint: EndPoints,
  id?: string | number,
  filters?: Partial<T>
) => {
  const filtersParameter = filters ? objectToUrlParameters(filters) : '';
  return `Ai/${endpoint}/${id || filtersParameter} `;
};

/**
 * Constructs the URL for accessing AI detection data based on the provided parameters.
 *
 * @template T - The type for the filters parameter.
 * @param {number} detectionId - The detection ID to be included in the URL.
 * @param {Partial<T>} [filters] - Optional filters to be included in the URL as query parameters.
 * @returns {string} The constructed URL.
 */

export const E_AI_MY_DETECTOR_DATA = <T>(
  detectionId: number,
  filters?: Partial<T>
): string =>
  filters
    ? `/Ai/my_detection_data/?detection_id=${detectionId}&${objectToUrlParameters(
        filters
      )}`
    : `/Ai/my_detection_data/?detection_id=${detectionId}`;
