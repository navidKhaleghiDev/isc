export const objectToUrlParameters = <T>(data: Partial<T>): string => {
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
