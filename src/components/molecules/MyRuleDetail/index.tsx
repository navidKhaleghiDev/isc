/* eslint-disable react/no-array-index-key */
import { BaseButton, Card, Typography } from '@ui/atoms';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import { useGet } from '@src/services/http/httpClient';
import {
  E_RULES_MY_RULES,
  E_RULES_MY_RULES_ID,
} from '@src/services/client/rules/endpoint';
import { IMyRule, ResponseSwr } from '@src/services/client/rules/types';
import { persianDateAndNumber } from '@src/helper/utils/dateUtils';
import { SliceOrderCodeType, getCodeList } from '@src/helper/utils/ruleCodes';
import { ChangeEvent, useEffect, useState } from 'react';
import {
  API_DELETE_MY_RULE,
  API_UPDATE_MY_RULE,
} from '@src/services/client/rules';
import { toast } from 'react-toastify';
import { CodeLine } from './CodeLine';
import { TitleMyProduct } from '../TitleMyProduct';
import { myRuleData } from './dataMock';
import { Modal } from '../Modal';

export function MyRuleDetail() {
  const [codeList, setCodeList] = useState<SliceOrderCodeType[] | null>(null);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const slugs = pathname.split('/');
  const id = slugs[3];
  const { mutate } = useGet<ResponseSwr<IMyRule[]>>(E_RULES_MY_RULES);
  const { data } = useGet<ResponseSwr<IMyRule>>(E_RULES_MY_RULES_ID(id));
  const myRule = data?.data || myRuleData;

  useEffect(() => {
    setCodeList(getCodeList(myRule.rule_code));
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

  const handleDeleteMyRule = async () => {
    await API_DELETE_MY_RULE(myRule?.id as string)
      .then(() => {
        toast.success('با موفقیت حذف شد');
        mutate();
        navigate(-1);
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  const handleAddMyRule = async () => {
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
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  return (
    <div className="pb-5">
      <div className="grid grid-cols-3 gap-5 mb-16">
        <div>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="سازنده" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {myRule.creator.email}
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 mb-5">
            <TitleMyProduct title="تاریخ ثبت" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(myRule.created_at)}
            </Typography>
          </Card>
          <Card color="neutral" className="flex items-center px-4 ">
            <TitleMyProduct title="آخرین ویرایش" />
            <Typography size="h6" className="mr-auto text-neutral-400">
              {persianDateAndNumber(myRule.update_at)}
            </Typography>
          </Card>
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

      <Card color="neutral" className="p-4 h-[32rem] overflow-y-auto">
        {codeList &&
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
          })}
      </Card>
      <div className="w-full mt-10 flex justify-end">
        <BaseButton
          label="حذف"
          size="sm"
          type="red"
          className="ml-5"
          onClick={toggleModalDelete}
        />
        <BaseButton label="ثبت" size="sm" onClick={toggleModalEdit} />
      </div>
      <Modal
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        title="از ویرایش این قانون مطمئن هستید؟"
        buttonOne={{ label: 'بله', onClick: handleAddMyRule }}
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
        buttonOne={{ label: 'بله', onClick: handleDeleteMyRule }}
        buttonTow={{
          label: 'خیر',
          onClick: toggleModalDelete,
          color: 'red',
        }}
      />
    </div>
  );
}
