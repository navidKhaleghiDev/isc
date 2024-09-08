import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import EnvelopeSimple from '@iconify-icons/ph/envelope-simple';
import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { BackButton } from '@ui/atoms/BackButton';
import { regexPattern } from '@ui/atoms/Inputs';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { PasswordStrength } from '@ui/atoms/Inputs/PasswordInput/passwordStrength';
import { useUserContext } from '@context/user/userContext';
import { API_USERS_PATCH } from '@src/services/client/users';

type SettingValues = {
  email: string;
  password: string;
  password_r: string;
};

export function Settings() {
  const {
    control,
    handleSubmit,
    setError: setPasswordError,
    watch,
  } = useForm<SettingValues>();
  const { user } = useUserContext();
  //   const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async ({
    email,
    password,
    password_r,
  }: SettingValues) => {
    if (password_r !== password) {
      setPasswordError(
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

    await API_USERS_PATCH(user?.id as string, {
      email,
      password,
    })
      .then(() => {
        toast.success('تغییرات با موفقیت انجام شد.');
        // setError(null);
      })
      .catch((err) => {
        toast.error(err);
        // setError(err);
      });
  };

  const password = watch('password', '');

  return (
    <div className="w-full h-full flex flex-col px-10 sm:px-0">
      <div className="w-full sm:flex sm:justify-end hidden">
        <BackButton backToReferrer />
      </div>
      <div className="mb-10 ml-auto">
        <Typography size="h4" weight="bold" color="black">
          تغییر رمز عبور
        </Typography>
      </div>
      <form
        className="w-full h-full flex flex-col justify-between"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="w-full grid gap-x-7 gap-y-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 h-full">
          <BaseInput
            fullWidth
            control={control}
            label="ایمیل"
            placeholder="ایمیل"
            id="email"
            name="email"
            type="text"
            endIcon={EnvelopeSimple}
            rules={{
              required: regexPattern.required,
            }}
          />

          <div>
            <PasswordInput
              name="password"
              control={control}
              label="کلمه عبور"
              placeholder="کلمه عبور"
              fullWidth
            />
            <PasswordStrength password={password} />
            {/* {error && (
              <Typography color="red" size="body3" className="mb-10">
                {error}
              </Typography>
            )} */}
          </div>
          <PasswordInput
            name="password_r"
            control={control}
            label="تکرار کلمه عبور جدید"
            placeholder="تکرار کلمه عبور جدید"
            fullWidth
          />
        </div>
        <div className="md:self-end self-center w-40 sm:w-[11.875rem] mt-20">
          <BaseButton submit label="تغییر کلمه عبور" fullWidth />
        </div>
      </form>
    </div>
  );
}
