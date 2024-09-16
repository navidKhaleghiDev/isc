import { DoubleRangeSlider } from '@ui/atoms/Slider/DoubleSlider/DoubleRangeSlider';
import { SingleRangeSlider } from '@ui/atoms/Slider/SingleRangeSlider/SingleRangeSlider';

function App() {
  const handel = () => {
    // console.log(item);
  };
  return (
    <div>
      <DoubleRangeSlider
        min={10}
        max={100}
        initialMax={90}
        initialMin={20}
        onChange={handel}
        distance={10}
      />
      <SingleRangeSlider
        min={10}
        max={20}
        initialValue={15}
        onChange={handel}
        distance={40}
      />
    </div>
  );
}

export default App;
