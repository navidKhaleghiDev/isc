import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { useForm } from 'react-hook-form';
import { API_USERS_ADD } from '@src/services/client/users';
import { IAddUserFormValues } from './types';

export function AddUserPage() {
  const { control, handleSubmit } = useForm<IAddUserFormValues>({
    mode: 'onChange',
  });

  const handleSubmitForm = async (formData: IAddUserFormValues) => {
    await API_USERS_ADD(formData)
      .then(() => {
        toast.success('یوزر با موفقیت ثبت شد');
      })
      .catch((err) => {
        toast.error(err.data.error);
      });
  };

  return (
    <div className="w-full h-full flex flex-col pt-16 items-center px-32">
      <div className="mb-8 ml-auto">
        <Typography size="h4" color="teal">
          اضافه کردن کاربر جدید
        </Typography>
      </div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="w-full grid gap-5  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <BaseInput
            name="first_name"
            id="first_name"
            control={control}
            label="نام"
            placeholder="بنویسید"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.farsiLettersAndSpace,
            }}
            fullWidth
          />
          <BaseInput
            name="last_name"
            id="last_name"
            control={control}
            label="نام خانوادگی"
            placeholder="بنویسید"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.farsiLettersAndSpace,
            }}
            fullWidth
          />
          <BaseInput
            name="email"
            id="email"
            control={control}
            label="آدرس ایمیل"
            placeholder="بنویسید"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.email,
            }}
            fullWidth
          />
          <BaseInput
            name="password"
            id="password"
            control={control}
            label="گذرواژه"
            placeholder="بنویسید"
            rules={{
              required: regexPattern.required,
            }}
            fullWidth
          />
          {/* <BaseInput
            name="date_joined"
            id="date_joined"
            type="date"
            control={control}
            label="تاریخ و زمان"
            rules={{
              required: regexPattern.required,
            }}
            placeholder="1402/02/23  -  11:25 AM"
            fullWidth
          /> */}
        </div>
        <div className="ml-auto mt-6">
          <BaseCheckBox
            name="is_admin"
            id="is_admin"
            control={control}
            label="ادمین"
          />
          <BaseCheckBox
            name="is_analyser"
            id="is_analyser"
            control={control}
            label="ادمین سیستم نظارتی"
          />
        </div>
        <BaseButton
          label="اضافه کردن کاربر جدید"
          className="mt-24"
          size="xl"
          submit
        />
      </form>
    </div>
  );
}
