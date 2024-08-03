import { BaseButton, BaseInput } from '@ui/atoms';
import { TitleSection } from '@ui/atoms/TitleSection';
import { useForm } from 'react-hook-form';
import PhUser from '@iconify-icons/ph/user';
import PhEnvelopeSimple from '@iconify-icons/ph/envelope-simple';
import { PageBackButton } from '@ui/atoms/BackButton';
import { regexPattern } from '@ui/atoms/Inputs';
import { useUserContext } from '@context/user/userContext';
import { IAddUserFormValues } from '../Users/types';

export function Setting() {
  const { user } = useUserContext();
  //   const userId = user?.id;
  const firstName = user?.first_name;
  const lastName = user?.last_name;
  const email = user?.email;
  const { control, handleSubmit } = useForm<IAddUserFormValues>({
    mode: 'onChange',
  });

  //   We don't have an API for this component.

  const handleSubmitForm = async () => {
    // if (!userId) {
    //   toast.error('کاربر یافت نشد');
    //   return;
    // }
    // const body: IBodySetting = {
    //   first_name: formData.first_name,
    //   last_name: formData.last_name,
    //   phone_number: formData.phone_number
    //     ? Number(formData.phone_number)
    //     : undefined,
    // };
    // await API_USERS_UPDATE(userId, body)
    //   .then(() => {
    //     toast.success('کاربر با موفقیت ثبت شد');
    //   })
    //   .catch((error) => {
    //     toast.error(error);
    //   });
  };

  return (
    <div className="w-full h-full flex flex-col items-center py-14 px-10">
      <div className="w-full flex justify-center items-center mb-6">
        <TitleSection
          label={
            firstName && lastName
              ? `${firstName} ${lastName}`
              : 'Mehdi Bazargan'
          }
        />
        <div className="hidden sm:flex">
          <PageBackButton />
        </div>
      </div>
      <form
        className="w-full h-full flex flex-col justify-between"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="w-full grid gap-x-7 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <BaseInput
            id="first_name"
            name="first_name"
            label="نام"
            placeholder={firstName}
            control={control}
            endIcon={PhUser}
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.farsiLettersAndSpace,
            }}
            fullWidth
          />
          <BaseInput
            id="last_name"
            name="last_name"
            label="نام خانوادگی"
            placeholder={lastName}
            control={control}
            endIcon={PhUser}
            size="lg"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.farsiLettersAndSpace,
            }}
            fullWidth
          />
          <BaseInput
            id="phone_number"
            name="phone_number"
            label="ایمیل"
            placeholder={email}
            control={control}
            endIcon={PhEnvelopeSimple}
            size="lg"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.phoneNumber,
            }}
            fullWidth
          />
        </div>
        {/* <BaseButton
          submit
          label="ثبت تغییرات"
          size="xl"
          className="mt-16 self-end"
        /> */}
        {/* <div className="flex justify-end ml-28">
          <BaseButton submit label="ثبت تغییرات" size="xl" />
        </div> */}
        <div className="flex justify-center sm:justify-end mt-[160px]">
          <BaseButton submit label="ثبت تغییرات" size="xl" />
        </div>
      </form>
    </div>
  );
}
