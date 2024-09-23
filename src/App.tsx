import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { BaseCheckBoxTest } from './UI/BaseCheckBox';

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
      {/* Your components here */}
      <BrowserRouter>
        <Routes>
          <Route path="/ui" element={<BaseCheckBoxTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
