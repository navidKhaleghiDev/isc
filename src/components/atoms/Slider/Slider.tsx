import { ChangeEvent, useState, useEffect } from 'react';
import { sliderStyles } from './styles';

export function Slider() {
  const [value, setValue] = useState<number>(0);

  const fetchData = async () => {
    const response = await new Promise<number>((resolve) => {
      setTimeout(() => resolve(20), 1000);
    });
    setValue(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        value={value}
        onChange={handleChange}
        dir="ltr"
        className={sliderStyles({
          color: 'light',
        })}
        style={{
          background: `linear-gradient(to right, #2dd4bf ${value}%, #52525b ${value}%)`,
        }}
      />
    </div>
  );
}
