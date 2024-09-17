import { BaseOtp } from '@ui/atoms/Inputs/BaseOtp';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { control } = useForm();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <BaseOtp
        control={control}
        name="name"
        dir="ltr"
        size="md"
        valueLength={6}
        pureError=""
      />
      {/* Your components here */}
    </div>
  );
}

export default App;
