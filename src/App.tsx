import { SingleRangeSlider } from '@ui/atoms/Slider';
import { DoubleRangeSlider } from '@ui/atoms/Slider/DoubleSlider/DoubleRangeSlider';

function App() {
  const handel = () => {
    console.log('test');
  };
  return (
    <div>
      <DoubleRangeSlider
        min={10}
        max={100}
        step={1}
        initialMax={90}
        initialMin={20}
        onChange={handel}
      />
      <SingleRangeSlider
        min={10}
        max={20}
        initialValue={15}
        step={1}
        onChange={handel}
      />
    </div>
  );
}

export default App;
