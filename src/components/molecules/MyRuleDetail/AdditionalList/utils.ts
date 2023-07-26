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
    // const nnnnnnnn = oldList.filter((oldP) => {
    //   return newList.some((newP) => newP.code === oldP.code);
    // });
    // console.log({ oldList, newList, nnnnnnnn });

    // if (oldList.length < newList.length) {
    //   // added policy on newList list
    //   isAdded = true;
    //   addedList = newList.filter(
    //     (newP) => !oldList.some((oldP) => oldP.code === newP.code)
    //   );
    // } else if (oldList.length > newList.length) {
    //   // removed policy
    //   isRemoved = true;

    //   removedList = oldList.filter(
    //     (oldP) => !newList.some((newP) => newP.code === oldP.code)
    //   );
    // } else {
    //   changedList = newList.filter(
    //     (newP) => !oldList.some((oldP) => oldP.code === newP.code)
    //   );
    // }
  }

  console.log({
    isAdded: !!addedList.length,
    isRemoved: !!removedList.length,
    changedList,
    removedList,
    addedList,
  });

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
