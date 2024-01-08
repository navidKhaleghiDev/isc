import { QueryParams } from '@src/types/global';

export const objectToUrlParameters = <T>(data: QueryParams<T>): string => {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        value &&
        `${encodeURIComponent(key as string)}=${encodeURIComponent(
          value as string
        )}`
    )
    .filter(Boolean)
    .join('&');
};
