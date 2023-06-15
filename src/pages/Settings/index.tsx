import { BaseButton } from '@ui/atoms';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { useForm } from 'react-hook-form';

export function SettingsPage() {
  const { control, handleSubmit } = useForm();

  const handleFormSubmit = (formData: any) => {
    console.log({ formData });
  };

  return (
    <form
      className="h-full flex flex-col justify-around items-center p-12 px-32"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <PasswordInput
          name="current"
          control={control}
          placeholder="کلمه عبور فعلی"
        />
        <PasswordInput
          name="new"
          control={control}
          placeholder="کلمه عبور جدید"
        />
        <PasswordInput
          name="repeatNew"
          control={control}
          placeholder="تکرار کلمه عبور جدید"
        />
      </div>
      <BaseButton label="ذخیره تغییرات" size="xl" />
    </form>
  );
}
