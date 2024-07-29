import { BaseButton, BaseInput } from '@ui/atoms';
import { TitleSection } from '@ui/atoms/TitleSection';
import { useForm } from 'react-hook-form';
import PhUser from '@iconify-icons/ph/user';
import PhPhone from '@iconify-icons/ph/phone';
import { toast } from 'react-toastify';
import { PageBackButton } from '@ui/atoms/BackButton';
import { regexPattern } from '@ui/atoms/Inputs';
import { API_USERS_UPDATE } from '@src/services/client/users';
import { IBodySetting } from '@src/services/client/users/types';
import { useUserContext } from '@context/user/userContext';
import { IAddUserFormValues } from '../Users/types';

export function Setting() {
  const { user } = useUserContext();
  const userId = user?.id;
  const firstName = user?.firstName;
  const lastName = user?.lastName;

  const { control, handleSubmit } = useForm<IAddUserFormValues>({
    mode: 'onChange',
  });

  const handleSubmitForm = async (formData: IAddUserFormValues) => {
    if (!userId) {
      toast.error('کاربر یافت نشد');
      return;
    }

    const body: IBodySetting = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber
        ? Number(formData.phoneNumber)
        : undefined,
    };

    await API_USERS_UPDATE(userId, body)
      .then(() => {
        toast.success('کاربر با موفقیت ثبت شد');
      })
      .catch((error) => {
        toast.error(error);
      });
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
            placeholder=""
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
            placeholder=""
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
            placeholder=""
            control={control}
            endIcon={PhPhone}
            size="lg"
            rules={{
              required: regexPattern.required,
              pattern: regexPattern.cardNumber,
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
