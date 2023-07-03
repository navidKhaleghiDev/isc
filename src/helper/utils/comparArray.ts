/* eslint-disable @typescript-eslint/no-explicit-any */
export function getCountChangedTowArray(arr1: any[], arr2: any[]) {
  return arr1.reduce((count, obj, index) => {
    return (
      count +
      Object.keys(obj).reduce((innerCount, prop) => {
        return obj[prop] !== arr2[index][prop] ? innerCount + 1 : innerCount;
      }, 0)
    );
  }, 0);
}
