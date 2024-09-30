import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SliderTest } from '@ui/atoms/Slider/SliderTest';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      <BrowserRouter>
        <Routes>
          <Route path="/ui" element={<SliderTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
