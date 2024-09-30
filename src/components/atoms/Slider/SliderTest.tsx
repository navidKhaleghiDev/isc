import { useState } from 'react';
import { BaseSlider } from './BaseSlider/BaseSlider';
import { MultipleBaseSlider } from './MultipleBaseSlider/MultipleBaseSlider';

export function SliderTest() {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderRange, setSliderRange] = useState({ min: 0, max: 100 });

  const handleSliderChange = () => {
    setSliderValue(sliderValue);
    // values: {
    //   max: number;
    // }
    // console.log(values.max);
  };

  const handleMultipleSliderChange = () => {
    setSliderRange(sliderRange);
    // values: {
    //   min: number;
    //   max: number;
    // }
    // console.log('min', values.min);
    // console.log('max', values.max);
  };
  return (
    <>
      <BaseSlider
        initialValue={30}
        min={0}
        max={100}
        onChange={handleSliderChange}
        hiddenLabel
      />
      <MultipleBaseSlider
        min={0}
        max={100}
        initialMin={20}
        initialMax={50}
        onChange={handleMultipleSliderChange}
        hiddenLabel
      />
    </>
  );
}
