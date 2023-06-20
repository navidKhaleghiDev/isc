export const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout((_error, data) => resolve(data), time);
  });
};
