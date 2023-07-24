/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGet } from '@src/services/http/httpClient';
import {
  E_RULES_MY_RULES,
  E_RULES_MY_RULES_ID,
  E_RULES_RETRIEVE,
} from '@src/services/client/rules/endpoint';
import { IMyRule, IRules, ResponseSwr } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  API_DELETE_MY_RULE,
  API_UPDATE_MY_RULE,
} from '@src/services/client/rules';
import { getCountChangedTowArray } from '@src/helper/utils/comparArray';
import { toast } from 'react-toastify';
import { CodeLine } from './CodeLine';
import { Modal } from '../Modal';
import { CardRuleDetail } from '../CardRuleDetail';
import { NoResult } from '../NoResult';
import { CodeLineSelect } from './CodeLine/CodeLineSelect';
import { AdditionalList } from './AdditionalList';

export function MyRuleDetail() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];
  const [codeList, setCodeList] = useState<SliceOrderCodeType[] | null>(null);
  const [isSetAdditional, setIsSetAdditional] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [valueCodeLineSelect, setValueCodeLineSelect] = useState('');
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [modalsLoading, setModalsLoading] = useState({
    deleteButton: false,
    editButton: false,
  });

  const { mutate } = useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);
  const { data: dataMyRule } = useGet<ResponseSwr<IMyRule>>(
    E_RULES_MY_RULES_ID(id)
  );
  const myRule: IMyRule | undefined = dataMyRule?.data;
  const { data: dataRule } = useGet<ResponseSwr<IRules>>(
    !isSetAdditional && myRule?.id ? E_RULES_RETRIEVE(myRule.id) : null
  );
  const rule: IRules | undefined = dataRule?.data;

  useEffect(() => {
    setCodeList(getCodeList(myRule?.rule_code));
  }, [myRule]);

  const toggleModalDelete = () => setOpenModalDelete(!openModalDelete);
  const toggleModalEdit = () => setOpenModalEdit(!openModalEdit);

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
    setValueCodeLineSelect(value);
    const updatedList = codeList
      ? codeList.map((obj) => ({ ...obj, order: value }))
      : null;
    setCodeList(updatedList);
  };

  const handleDeleteMyRule = async () => {
    setModalsLoading((prev) => ({ ...prev, deleteButton: true }));

    await API_DELETE_MY_RULE(myRule?.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutate();
        toggleModalDelete();
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, deleteButton: false }));
      });
  };

  const handleAddMyRule = async () => {
    setModalsLoading((prev) => ({ ...prev, editButton: true }));
    let ruleCode = '';
    if (codeList) {
      codeList.forEach((code) => {
        ruleCode += `${code.order}${code.code} \r\n\r `;
      });
    }
    // const body = codeList.for
    await API_UPDATE_MY_RULE(myRule?.id as string, { rule_code: ruleCode })
      .then(() => {
        toast.success('با موفقیت ویرایش شد');
        mutate();
        toggleModalEdit();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        setModalsLoading((prev) => ({ ...prev, editButton: false }));
      });
  };

  const addHandler = (additional: SliceOrderCodeType[]) => {
    setCodeList(additional);
    setIsSetAdditional(true);
  };

  return myRule ? (
    <div className="pb-5">
      <div className="grid grid-cols-3 gap-5 mb-16">
        <div>
          <CardRuleDetail
            label="سازنده"
            value={myRule.creator.email}
            className="mt-5"
          />
          <CardRuleDetail
            label="تاریخ ثبت"
            value={persianDateAndNumber(myRule.created_at)}
            className="mt-5"
          />
          <CardRuleDetail
            label="آخرین ویرایش"
            value={persianDateAndNumber(myRule.update_at)}
            className="mt-5"
          />
        </div>
        <div className="col-span-2 flex flex-col justify-start items-end">
          <Typography color="neutral" size="h4">
            {myRule.rule_name}
          </Typography>
          <Card color="neutral" className="px-2 w-full h-full">
            <Typography
              size="body2"
              className="text-neutral-500 w-full text-left"
            >
              {myRule.description}
            </Typography>
          </Card>
        </div>
      </div>
      <div className="flex w-100 justify-between bg-neutral-100 rounded mb-2 px-2">
        <Typography size="body1" color="neutral">
          اعمال تغییرات برای تمام پالیسی ها:
        </Typography>
        <CodeLineSelect
          value={valueCodeLineSelect}
          onChange={onChangeAllOrder}
          className="text-2xl"
        />
      </div>
      <Card color="neutral" className="p-4 max-h-[24rem] overflow-y-auto">
        {codeList && codeList.length > 0 ? (
          codeList.map((code: SliceOrderCodeType, index: number) => {
            return (
              <CodeLine
                key={`${index}_${code.order}`}
                code={code}
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
          {codeList && (
            <>
              <CardRuleDetail
                label="سیاست ها"
                value={`${Object.entries(codeList).length}`}
                className="ml-5"
              />
              <CardRuleDetail
                label="تغییرداده‌شده‌ها"
                value={`${getCountChangedTowArray(
                  getCodeList(myRule?.rule_code),
                  codeList
                )}`}
              />
            </>
          )}
        </div>
        <div className="w-full flex justify-end">
          <BaseButton
            label="حذف"
            size="sm"
            type="red"
            className="ml-5"
            onClick={toggleModalDelete}
          />
          <BaseButton label="ثبت" size="sm" onClick={toggleModalEdit} />
        </div>
      </div>
      {myRule && rule && (
        <AdditionalList
          myRuleCodeList={getCodeList(myRule?.rule_code)}
          ruleCodeList={getCodeList(rule?.code)}
          isSetAdditional={isSetAdditional}
          onAddHandler={addHandler}
        />
      )}
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="از ویرایش این قانون مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleAddMyRule,
          loading: modalsLoading.editButton,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalEdit,
          color: 'red',
        }}
        type="success"
      />
      <Modal
        open={openModalDelete}
        setOpen={setOpenModalDelete}
        type="error"
        title="از حذف این قانون مطمئن هستید؟"
        buttonOne={{
          label: 'بله',
          onClick: handleDeleteMyRule,
          loading: modalsLoading.deleteButton,
        }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalDelete,
          color: 'red',
        }}
      />
    </div>
  ) : (
    <NoResult />
  );
}
