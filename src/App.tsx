import { BaseInput } from '@ui/atoms/Inputs/BaseInput/index';
import { useForm } from 'react-hook-form';
import PhMagnifyingGlass from '@iconify-icons/ph/magnifying-glass';
import { regexPattern } from '@ui/atoms/Inputs';

function App() {
  const { control, handleSubmit } = useForm();
  const handelMyFormSubmition = () => {};

  return (
    <div className="flex items-center justify-center h-screen font-kalameh">
      <form onSubmit={handleSubmit(handelMyFormSubmition)}>
        <BaseInput
          id="name"
          rules={{ pattern: regexPattern.farsiLetters }}
          name="نام کاربری"
          placeholder="نام کاربری"
          control={control}
          endIcon={PhMagnifyingGlass}
          hiddenError
          // pureError="کلمع ع"
          fullWidth
          dir="ltr"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
