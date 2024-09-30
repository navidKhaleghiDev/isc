import { useState } from 'react';

import { ToggleButton } from '@ui/atoms/ToggleButton/ToggleButton';
import { ButtonOptions } from '@ui/atoms/ToggleButton/types';

export function BaseToggleTest() {
  const buttonOption: ButtonOptions[] = [
    { id: 1, label: 'روزانه' },
    { id: 2, label: 'هفتگی' },
    { id: 3, label: 'ماهیانه' },
  ];
  const [selectedLabel, setActiveLabel] = useState<number | undefined>();
  const handleToggleChange = (optionIndex: number) => {
    setActiveLabel(optionIndex);
    // console.log(optionIndex);
  };
  return (
    <div className="font-kalameh">
      <h1>Selected: {selectedLabel ? `${selectedLabel}` : 'None'}</h1>
      <ToggleButton
        buttonOption={buttonOption}
        onChange={handleToggleChange}
        size="responsive"
      />
    </div>
  );
}
