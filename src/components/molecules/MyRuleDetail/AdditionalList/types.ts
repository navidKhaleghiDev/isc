import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
// import { IMyRule } from '@src/services/client/rules/types';

export type ReturnArrayDifferenceType = {
  isRemoved: boolean;
  isAdded: boolean;
  removedList: SliceOrderCodeType[];
  addedList: SliceOrderCodeType[];
  changedList: SliceOrderCodeType[];
};

export type PropsAdditionalList = {
  onAddHandler: (additional: SliceOrderCodeType[]) => void;
  myRuleId: string;
  myRuleCodeList: SliceOrderCodeType[];
  onSetChangedCount: (value: string) => void;
};
