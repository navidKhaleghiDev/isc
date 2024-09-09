import { useForm } from 'react-hook-form';
import { BaseInput } from '@ui/atoms/Inputs/BaseInput/Controller';
import PhMagnifyingGlass from '@iconify-icons/ph/magnifying-glass';

type FormValues = {
  ReactDatepicker: string;
};

function App() {
  const { control } = useForm<FormValues>();

  return (
    <div className="flex items-center justify-center w-screen h-screen font-kalameh">
      <form>
        <BaseInput
          id="name"
          name="name"
          control={control}
          dir="rtl"
          label="نام کاربری"
          endIcon={PhMagnifyingGlass}
          size="md"
        />
      </form>
    </div>
  );
}

export default App;
