import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseInputTest } from './UI/BaseInputTest';
import BaseTextAreaTest from './UI/BaseTextAreaTest';

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
          <Route path="/ui" element={<BaseTextAreaTest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
