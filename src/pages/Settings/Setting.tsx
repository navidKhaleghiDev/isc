import { BaseButton, BaseInput } from '@ui/atoms';
import { TitleSection } from '@ui/atoms/TitleSection';
import { useForm } from 'react-hook-form';
import PhUser from '@iconify-icons/ph/user';
import PhPhone from '@iconify-icons/ph/phone';
import { PageBackButton } from '@ui/atoms/BackButton';
import { regexPattern } from '@ui/atoms/Inputs';
import { useUserContext } from '@context/user/userContext';
import { IAddUserFormValues } from '../Users/types';

export function Setting() {
  const { user } = useUserContext();
  //   const userId = user?.id;
  const firstName = user?.first_name;
  const lastName = user?.last_name;

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
    <div className="w-full h-full flex flex-col mx-4">
      <div className="flex mt-14 ml-28 px-2">
        <TitleSection
          label={firstName && lastName ? `${firstName} ${lastName}` : ''}
        />
        <PageBackButton />
      </div>
      <form
        className="w-full h-full flex flex-col justify-between mb-8"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="flex">
          <BaseInput
            id="first_name"
            name="first_name"
            label="نام"
            placeholder={firstName}
            control={control}
            endIcon={PhUser}
            size="lg"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.farsiLettersAndSpace,
            }}
            className="mx-2"
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
            className="mx-2"
          />
          <BaseInput
            id="phone_number"
            name="phone_number"
            label="شماره تماس"
            placeholder="09121111111"
            control={control}
            endIcon={PhPhone}
            size="lg"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.phoneNumber,
            }}
            className="mx-2"
          />
        </div>
        <div className="flex justify-end ml-28">
          <BaseButton submit label="ثبت تغییرات" size="xl" />
        </div>
      </form>
    </div>
  );
}
