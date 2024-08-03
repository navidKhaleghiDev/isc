import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { toast } from 'react-toastify';
import { regexPattern } from '@ui/atoms/Inputs';
import { BaseCheckBox } from '@ui/atoms/Inputs/BaseCheckBox';
import { useForm } from 'react-hook-form';
import { PasswordInput } from '@ui/atoms/Inputs/PasswordInput';
import { API_USERS_ADD } from '@src/services/client/users';
import { EUserRole, WithPermission } from '@src/helper/hoc/withPermission';
import { BackButton } from '@ui/atoms/BackButton';
import UserCirclePlus from '@iconify-icons/ph/user-circle-plus';
import EnvelopeSimple from '@iconify-icons/ph/envelope-simple';
import CalendarBlack from '@iconify-icons/ph/calendar-blank';
import { PasswordStrength } from '@ui/atoms/Inputs/PasswordInput/passwordStrength';
import { DatePicker } from '@ui/atoms/Inputs/DatePicker';

import { IAddUserFormValues } from './types';

/**
 * AddUserPageCp Component
 *
 * This component renders a form for adding a new user. It includes inputs for first name, last name, email,
 * join date, password, and user roles. It uses react-hook-form for form management and validation.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component for adding a new user.
 *
 * @example
 * return (
 *   <AddUserPageCp />
 * )
 */
function AddUserPageCp() {
  const { control, handleSubmit, watch } = useForm<IAddUserFormValues>({
    mode: 'onChange',
  });

  const passwordValue = watch('password', '');

  const handleSubmitForm = async (formData: IAddUserFormValues) => {
    await API_USERS_ADD(formData)
      .then(() => {
        toast.success('یوزر با موفقیت ثبت شد');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="w-full h-full flex flex-col items-center py-14 px-10">
      <div className="w-full flex justify-end mb-6">
        <BackButton backToReferrer />
      </div>
      <div className="mb-10 ml-auto">
        <Typography size="h5" weight="bold" color="black">
          اضافه کردن کاربر جدید
        </Typography>
      </div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="w-full grid gap-x-7 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <BaseInput
            name="first_name"
            id="first_name"
            control={control}
            label="نام"
            placeholder="نام"
            endIcon={UserCirclePlus}
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
            size="lg"
            placeholder="نام خانوادگی"
            endIcon={UserCirclePlus}
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
            label="ایمیل"
            size="lg"
            placeholder="ایمیل"
            endIcon={EnvelopeSimple}
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.email,
            }}
            fullWidth
          />
          <DatePicker
            name="joined_date"
            id="joined_date"
            control={control}
            label="تاریخ ثبت نام"
            size="lg"
            placeholder="تاریخ ثبت نام"
            endIcon={CalendarBlack}
            minDate={Date.now()}
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.email,
            }}
            fullWidth
          />
          <div>
            <PasswordInput
              name="password"
              control={control}
              label="کلمه عبور"
              placeholder="کلمه عبور"
              fullWidth
            />
            <PasswordStrength password={passwordValue} />
          </div>
        </div>
        <div className="ml-auto mt-14">
          <Typography size="h5" weight="bold" color="black">
            نوع کاربری
          </Typography>
          <div className="flex flex-col">
            <BaseCheckBox
              name="is_admin"
              id="is_admin"
              control={control}
              label="ادمین"
              hiddenError
            />
            <BaseCheckBox
              name="is_analyser"
              id="is_analyser"
              control={control}
              label="ادمین سیستم نظارتی"
              hiddenError
            />
          </div>
        </div>
        <BaseButton
          label="ثبت کاربر جدید"
          className="mt-16 self-end"
          size="xl"
          submit
        />
      </form>
    </div>
  );
}

/**
 * AddUserPage Component
 *
 * This component wraps AddUserPageCp with permission checking. Only users with SUPER_USER role can access it.
 *
 * @component
 *
 * @returns {JSX.Element} The permission-protected component for adding a new user.
 *
 * @example
 * return (
 *   <AddUserPage />
 * )
 */
const AddUserPage = WithPermission(AddUserPageCp, EUserRole.SUPER_USER, true);

export { AddUserPage };
