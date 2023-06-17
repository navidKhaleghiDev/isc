import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';
import { http } from '@src/services/http';
import { BaseButton } from '@ui/atoms';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type SettingValues = {
  password: string;
  password_r: string;
};
export function SettingsPage() {
  const { control, handleSubmit, setError } = useForm<SettingValues>();
  const { user, setUser } = useUserContext();

  const handleFormSubmit = async ({ password, password_r }: SettingValues) => {
    if (password_r !== password) {
      setError(
        'password_r',
        {
          message: 'تکرار گذرواژه صحیح نیست',
        },
        {
          shouldFocus: true,
        }
      );
      return;
    }

    await API_USERS_PATCH(user.id, {
      password,
    })
      .then(() => {
        toast.success('تغییر گذرواژه با موفقیت انجام شد.');
        http.removeAuthHeader();
        setUser(null);
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  return (
    <div className="h-full flex justify-center items-center">
      <form
        className="h-full flex flex-col justify-around items-center p-12 max-w-xxl"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="w-full flex flex-col items-center justify-center">
          {/* <PasswordInput
            name="current"
            control={control}
            placeholder="کلمه عبور فعلی"
          /> */}
          <PasswordInput
            name="password"
            control={control}
            placeholder="کلمه عبور جدید"
          />
          <PasswordInput
            name="password_r"
            control={control}
            placeholder="تکرار کلمه عبور جدید"
          />
        </div>
        <BaseButton submit label="ذخیره تغییرات" size="xl" />
      </form>
    </div>
  );
}
