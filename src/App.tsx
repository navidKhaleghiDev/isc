import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const { control } = useForm({
  //   defaultValues: {
  //     firstName: '',
  //     lastName: '',
  //   },
  // });

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
      {/* <BaseCheckBox control={control} id="n" name="n" dir="rtl" label="nanna" /> */}
      {/* Your components here */}
    </div>
  );
}

export default App;
