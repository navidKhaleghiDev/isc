import { Slider } from '@ui/atoms/Slider';
import { DoubleRangeSlider } from '@ui/atoms/Slider/DoubleSlider/DoubleRangeSlider';

function App() {
  return (
    <div>
      <DoubleRangeSlider
        onChange={() => {
          // console.log('test');
        }}
        min={10}
        max={100}
        step={1}
        initialMax={80}
        initialMin={30}
      />
      <Slider
        onChange={() => {
          // console.log('test');
        }}
        min={10}
        max={100}
        step={1}
        initialMax={80}
        initialMin={30}
      />
    </div>
  );
}

export default App;
