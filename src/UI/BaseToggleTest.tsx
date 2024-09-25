import { useState } from 'react';

import { ToggleButton } from '@ui/atoms/ToggleButton/ToggleButton';
import { ButtonOptions } from '@ui/atoms/ToggleButton/types';

export function BaseToggleTest() {
  const buttonOption: ButtonOptions[] = [
    { id: 1, label: 'روزانه', name: 'daily' },
    { id: 2, label: 'هفتگی', name: 'weekly' },
    { id: 3, label: 'ماهیانه', name: 'mounthly' },
  ];
  const [selectedLabel, setActiveLabel] = useState<
    number | string | undefined
  >();
  const handleToggleChange = (selected: ButtonOptions) => {
    setActiveLabel(selected.name);
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
