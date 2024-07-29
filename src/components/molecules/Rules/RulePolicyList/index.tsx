/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, forwardRef, useImperativeHandle, useState } from 'react';
import { NoResult } from '@ui/molecules/NoResult';
import { CardRuleDetail } from '@ui/molecules/Rules/CardRuleDetail';
import { Modal } from '@ui/molecules/Modal';
import { CodeLine } from '@ui/molecules/Rules/MyRuleDetail/CodeLine';
import { CodeLineSelect } from '@ui/molecules/Rules/MyRuleDetail/CodeLine/CodeLineSelect';

/**
 * Props for RulePolicyList component.
 *
 * @typedef {Object} RulePolicyListProps
 * @property {() => void} [onDeleteRule] - Function to handle rule deletion.
 * @property {() => void} onRegisterRule - Function to handle rule registration.
 * @property {SliceOrderCodeType[]} codeList - List of code slices.
 * @property {(codeList: SliceOrderCodeType[]) => void} setCodeList - Function to update the code list.
 * @property {number} countDifferenceOrder - Count of order differences.
 */

type RulePolicyListProps = {
  onDeleteRule?: () => void;
  onRegisterRule: () => void;
  codeList: SliceOrderCodeType[];
  setCodeList: (codeLIst: SliceOrderCodeType[]) => void;
  countDifferenceOrder: number;
};

/**
 * Loading state for modals.
 *
 * @typedef {Object} ModalsLoadingType
 * @property {boolean} deleteButton - Loading state for delete button.
 * @property {boolean} editButton - Loading state for edit button.
 */
type ModalsLoadingType = {
  deleteButton: boolean;
  editButton: boolean;
};

/**
 * Reference interface for RulePolicyList.
 *
 * @typedef {Object} IRulePolicyListRef
 * @property {(values: ModalsLoadingType) => void} setModalsLoadingParent - Set loading state for modals.
 * @property {() => void} toggleModalEdit - Toggle edit modal visibility.
 * @property {() => void} toggleModalDelete - Toggle delete modal visibility.
 */

export interface IRulePolicyListRef {
  setModalsLoadingParent: (values: ModalsLoadingType) => void;
  toggleModalEdit: () => void;
  toggleModalDelete: () => void;
}

/**
 * RulePolicyList Component
 *
 * This component displays a list of rule policies and allows editing and deleting them.
 *
 * @component
 *
 * @param {RulePolicyListProps} props - Props for RulePolicyList component.
 * @param {React.Ref<IRulePolicyListRef>} ref - Reference for the component.
 *
 * @returns {JSX.Element} The rendered RulePolicyList component.
 */

function RulePolicyListCp(
  {
    codeList,
    setCodeList,
    onDeleteRule,
    onRegisterRule,
    countDifferenceOrder,
  }: RulePolicyListProps,
  ref: React.Ref<IRulePolicyListRef>
) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [valueAllCodeLineSelect, setValueAllCodeLineSelect] = useState('');
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [modalsLoading, setModalsLoading] = useState({
    deleteButton: false,
    editButton: false,
  });

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

  const setModalsLoadingParent = ({
    deleteButton,
    editButton,
  }: ModalsLoadingType) => {
    setModalsLoading({
      deleteButton,
      editButton,
    });
  };

  useImperativeHandle(ref, () => ({
    setModalsLoadingParent,
    toggleModalEdit,
    toggleModalDelete,
  }));

  const handleOnChangeOrder = (
    { target: { value } }: ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    // console.log({ codeList });

    if (codeList) {
      const newCodeList = codeList.slice();
      newCodeList[index].order = value;
      setCodeList(newCodeList);
    }
  };

  const onChangeAllOrder = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setValueAllCodeLineSelect(value);
    const updatedList = codeList
      ? codeList.map((obj) => ({ ...obj, order: value }))
      : [];
    setCodeList(updatedList);
  };

  return (
    <>
      <div className="flex w-100 justify-between bg-neutral-100 rounded mb-2 px-2">
        <Typography size="body2" color="neutral">
          اعمال تغییرات برای تمام پالیسی ها:
        </Typography>
        <CodeLineSelect
          id="RulePolicyList"
          value={valueAllCodeLineSelect}
          onChange={onChangeAllOrder}
          className="text-2xl"
        />
      </div>
      <Card color="neutral" className="p-4 max-h-[24rem] overflow-y-auto">
        {codeList.length > 0 ? (
          codeList.map((mCode: SliceOrderCodeType, index: number) => {
            return (
              <CodeLine
                id={`myRulePolicy-${index}`}
                key={`${index}_${mCode.order}`}
                code={mCode}
                onChangeOrder={(event: ChangeEvent<HTMLSelectElement>) =>
                  handleOnChangeOrder(event, index)
                }
              />
            );
          })
        ) : (
          <NoResult />
        )}
      </Card>
      <div className="flex w-full justify-between items-center mt-8">
        <div className="flex">
          <CardRuleDetail
            label="سیاست ها"
            value={`${Object.entries(codeList).length}`}
            className="ml-5"
          />
          <CardRuleDetail
            label="تغییرداده‌شده‌ها"
            value={`${countDifferenceOrder}`}
          />
        </div>
        <div className="w-full flex justify-end">
          {onDeleteRule && (
            <BaseButton
              label="حذف"
              size="sm"
              type="red"
              className="ml-5"
              onClick={toggleModalDelete}
            />
          )}
          <BaseButton label="ثبت" size="sm" onClick={toggleModalEdit} />
        </div>
      </div>
      <Modal
        size="md"
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="از ثبت تغییرات این قانون مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: onRegisterRule,
          loading: modalsLoading.editButton,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalEdit,
          color: 'red',
        }}
        type="success"
      />
      {onDeleteRule && (
        <Modal
          size="md"
          open={openModalDelete}
          setOpen={setOpenModalDelete}
          type="error"
          title="از حذف این قانون مطمئن هستید؟"
          buttonOne={{
            label: 'بله',
            onClick: onDeleteRule,
            loading: modalsLoading.deleteButton,
          }}
          buttonTow={{
            label: 'خیر',
            onClick: toggleModalDelete,
            color: 'red',
          }}
        />
      )}
    </>
  );
}
export const RulePolicyList = forwardRef(RulePolicyListCp);
