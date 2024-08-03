/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { SliceOrderCodeType } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, forwardRef, useImperativeHandle, useState } from 'react';
import { NoResult } from '@ui/molecules/NoResult';
import { Modal } from '@ui/molecules/Modal';
import { CodeLine } from '@ui/molecules/Rules/MyRuleDetail/CodeLine';
import { CodeLineSelect } from '@ui/molecules/Rules/MyRuleDetail/CodeLine/CodeLineSelect';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import {
  AlertSvg,
  BlockSvg,
  DropSvg,
  PassSvg,
  RejectSvg,
} from '@ui/atoms/Svgs';

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
  { codeList, setCodeList, onDeleteRule, onRegisterRule }: RulePolicyListProps,
  ref: React.Ref<IRulePolicyListRef>
) {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [valueAllCodeLineSelect, setValueAllCodeLineSelect] = useState('');
  const [allPolicySelect, setAllPolicySelect] = useState(false);
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

  const policyAllIcon = () => {
    switch (valueAllCodeLineSelect) {
      case 'alert':
        return <AlertSvg />;
      case 'drop':
        return <DropSvg />;
      case 'block':
        return <BlockSvg />;
      case 'pass':
        return <PassSvg />;
      case 'reject':
        return <RejectSvg />;
      default:
        return <AlertSvg />;
    }
  };

  return (
    <div className="mt-12">
      <div className="flex items-center gap-2">
        <BaseCheckBox
          id="all_policy_active"
          name="all_policy"
          pureOnChange={() => setAllPolicySelect(!allPolicySelect)}
        />
        <Typography size="body5" color="neutral_light">
          اعمال تغییرات روی تمام سیاست ها
        </Typography>
      </div>
      {allPolicySelect && (
        <Card
          shadow="sm"
          rounded="lg"
          className="mt-5 px-2 flex flex-row-reverse gap-4 py-2 pr-6 transition "
        >
          <CodeLineSelect
            id="RulePolicyList"
            className="text-left"
            value={valueAllCodeLineSelect}
            onChange={onChangeAllOrder}
          />
          <div className="flex items-center justify-center gap-3 ml-6">
            <Typography>{`${
              valueAllCodeLineSelect || 'alert'
            }  بروی تمام سیاست ها`}</Typography>
            {policyAllIcon()}
          </div>
        </Card>
      )}
      <div className="max-h-[26.5rem] md:max-h-[18.75rem] overflow-y-auto mt-3 p-0.5">
        {codeList.length > 0 ? (
          codeList.map((mCode: SliceOrderCodeType, index: number) => {
            return (
              <Card
                shadow="sm"
                key={`${index}_${mCode.order}`}
                rounded="lg"
                className="text-left mt-[10px] py-2 px-2"
              >
                <CodeLine
                  id={`myRulePolicy-${index}`}
                  code={mCode}
                  onChangeOrder={(event: ChangeEvent<HTMLSelectElement>) =>
                    handleOnChangeOrder(event, index)
                  }
                  disable={allPolicySelect}
                />
              </Card>
            );
          })
        ) : (
          <NoResult />
        )}
      </div>
      <div className="flex w-full justify-between items-center mt-8">
        <div className="w-full flex items-center justify-between mb-5">
          <BaseButton label="ثبت تغییرات" size="lg" onClick={toggleModalEdit} />

          {onDeleteRule && (
            <BaseButton
              label="حذف قانون"
              size="lg"
              type="default"
              className="ml-5"
              onClick={toggleModalDelete}
            />
          )}
        </div>
      </div>
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        size="md"
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
          open={openModalDelete}
          setOpen={setOpenModalDelete}
          size="md"
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
    </div>
  );
}
export const RulePolicyList = forwardRef(RulePolicyListCp);
