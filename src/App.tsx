import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { handleSubmit } = useForm();
  const handelSubmitForm = () => {
    console.log('done');
  };

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
      <form onSubmit={handleSubmit(handelSubmitForm)}>
        <BaseCheckBox
          id="name"
          name="name"
          label="navid"
          size="sm"
          onChange={(e) => console.log(e)}
        />
      </form>
      {/* Your components here */}
    </div>
  );
}

export default App;
