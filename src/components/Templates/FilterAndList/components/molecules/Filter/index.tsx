/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Typography, BaseInput } from '@ui/atoms';
import { BaseSelect } from '@ui/atoms/Inputs/BaseSelect';
import { useForm } from 'react-hook-form';
import { FilterIps } from './Ips';

type PropsType = {
  withIps?: boolean;
};

export function FilterServices({ withIps }: PropsType) {
  const { control } = useForm();
  return (
    <>
      <Card
        color="neutral"
        className="self-start py-1 px-3 flex flex-col w-full"
      >
        <>
          <Typography size="body3" color="teal">
            مرتب سازی بر اساس
          </Typography>
          <div className="flex w-full justify-between items-center ">
            <BaseSelect
              control={control}
              id="sort-as"
              name="sortAs"
              placeholder="بنویسید"
            />
            <BaseInput
              control={control}
              id="search"
              name="search"
              placeholder="... جستجو"
            />
          </div>
        </>
      </Card>
      {withIps && <FilterIps />}
    </>
  );
}
