import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';

export type ReturnArrayDifferenceType = {
  isRemoved: boolean;
  removedList: SliceOrderCodeType[];
  changedList: SliceOrderCodeType[];
};

export type PropsAdditionalList = {
  onAddHandler: (additional: SliceOrderCodeType[]) => void;
  myRuleId?: string;
  myRuleCodeList: SliceOrderCodeType[];
  onSetChangedCount: (value: string) => void;
};
