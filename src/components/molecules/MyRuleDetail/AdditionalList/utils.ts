import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { comparArrayListObject } from '@src/helper/utils/comparArrayListObject';
import { ReturnArrayDifferenceType } from './types';

type PropsType = {
  newList?: SliceOrderCodeType[];
  oldList?: SliceOrderCodeType[];
};

const isSamePolicy = (a: SliceOrderCodeType, b: SliceOrderCodeType) =>
  a.code === b.code;

export const getCodeListDifference = ({
  newList,
  oldList,
}: PropsType): ReturnArrayDifferenceType => {
  let removedList: SliceOrderCodeType[] = [];
  let addedList: SliceOrderCodeType[] = [];
  let changedList: SliceOrderCodeType[] = [];

  if (oldList && newList) {
    if (newList.length > oldList.length) {
      // added on list
      addedList = comparArrayListObject<SliceOrderCodeType>(
        newList,
        oldList,
        isSamePolicy
      );
    } else if (newList.length < oldList.length) {
      // removed on list
      removedList = comparArrayListObject<SliceOrderCodeType>(
        oldList,
        newList,
        isSamePolicy
      );
    } else {
      changedList = comparArrayListObject<SliceOrderCodeType>(
        newList,
        oldList,
        isSamePolicy
      );
    }
  }

  return {
    isAdded: !!addedList.length,
    isRemoved: !!removedList.length,
    changedList: [...changedList, ...removedList, ...addedList],
    removedList,
    addedList,
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
