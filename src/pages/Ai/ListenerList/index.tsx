import { useState } from 'react';
import { Typography } from '@ui/atoms';

import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { ButtonState } from '@src/pages/Services/Rules/types';
import { useForm } from 'react-hook-form';
import { DatePicker } from '@ui/atoms/Inputs/DatePicker';
import { ProtocolDropDown } from '../ProtocolDropDown';
import { IStartListenerValues } from './types';
import { ListenerListCard } from './ListenerListCard';

export function ListenerList() {
  const [activeButton, setActiveButton] = useState<ButtonState>('suggest');
  const { control, handleSubmit } = useForm<IStartListenerValues>();

  const [search, setSearch] = useState('');

  const handleOnSearch = (value: string) => {
    setSearch(value);
  };

  const handleClickTab = (tab: ButtonState) => {
    setActiveButton(tab);
  };

  return (
    <div className="w-full mt-16">
      <div className="text-center mb-4">
        <Typography color="teal" size="h4">
          لیست مشاهده‌گر‌ها
        </Typography>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <ProtocolDropDown control={control} withoutLabel />
        </div>

        <div className="col-span-12 lg:col-span-4 gap-4 flex ">
          <DatePicker
            control={control}
            placeholder="تاریخ شروع"
            id="startData"
            name="startDate"
            fullWidth
          />
          <DatePicker
            control={control}
            placeholder="تاریخ پایان"
            id="endData"
            name="endDate"
            startIcon="ph:x"
            fullWidth
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <SearchInput onChange={handleOnSearch} value={search} />
        </div>
      </div>
      <ListenerListCard />
    </div>
  );
}
