import { ToggleButton } from '@ui/atoms/ToggleButton/ToggleButton';

function App() {
  const buttonNames = ['روزانه', 'هفتگی'];

  return (
    <div>
      <ToggleButton buttonLabels={buttonNames} />
    </div>
  );
}

export default App;
