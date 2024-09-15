import { SingleRangeSlider } from '@ui/atoms/Slider';
import { DoubleRangeSlider } from '@ui/atoms/Slider/DoubleSlider/DoubleRangeSlider';

function App() {
  return (
    <div>
      <DoubleRangeSlider
        min={10}
        max={100}
        step={1}
        initialMax={90}
        initialMin={20}
      />
      <SingleRangeSlider min={10} max={20} initialValue={15} step={1} />
    </div>
  );
}

export default App;
