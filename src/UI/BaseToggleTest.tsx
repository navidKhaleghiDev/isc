import { useState } from 'react';

import { ToggleButton } from '@ui/atoms/ToggleButton/ToggleButton';
import { ButtonOption } from '@ui/atoms/ToggleButton/types';

export function BaseToggleTest() {
  const buttonOptions: ButtonOption[] = [
    { id: 5, label: 'روزانه', active: true },
    { id: 10, label: 'هفتگی' },
    { id: 3, label: 'ماهیانه' },
  ];
  const [selectedIndex, setActiveIndex] = useState<ButtonOption | undefined>();
  const handleToggleChange = (item: ButtonOption) => {
    setActiveIndex(item);
    console.log(item);
  };
  return (
    <div className="font-kalameh">
      <h1>Selected: {selectedIndex ? `${selectedIndex.label}` : 'None'}</h1>
      <ToggleButton
        buttonOptions={buttonOptions}
        onChange={handleToggleChange}
        size="responsive"
      />
    </div>
  );
}
