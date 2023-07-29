import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { ReturnArrayDifferenceType } from './types';

type PropsType = {
  newList?: SliceOrderCodeType[];
  oldList?: SliceOrderCodeType[];
};

export const getCodeListDifference = ({
  newList,
  oldList,
}: PropsType): ReturnArrayDifferenceType => {
  let removedList: SliceOrderCodeType[] = [];
  let changedList: SliceOrderCodeType[] = [];

  if (oldList && newList) {
    if (newList.length < oldList.length) {
      // removed
      removedList = oldList.filter(
        (oldP) => !newList.some((newP) => newP.code === oldP.code)
      );
    } else {
      // added or changed
      changedList = newList.filter(
        (newP) => !oldList.some((oldP) => newP.code === oldP.code)
      );
    }
  }

  return {
    isRemoved: !!removedList.length,
    changedList: [...changedList, ...removedList],
    removedList,
  };
};

export const getDifference = (
  oldList: SliceOrderCodeType[],
  newList: SliceOrderCodeType[]
) => {
  const added = newList.filter(
    (newItem) => !oldList.some((oldItem) => oldItem.code === newItem.code)
  );
  const removed = oldList.filter(
    (oldItem) => !newList.some((newItem) => oldItem.code === newItem.code)
  );
  const edited = newList.filter((newItem) => {
    const oldItem = oldList.find((item) => item.code === newItem.code);
    return oldItem && oldItem.order !== newItem.order;
  });
  return { added, removed, edited };
};
