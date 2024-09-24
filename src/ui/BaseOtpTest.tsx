import { BaseOtp } from '@ui/atoms/Inputs/BaseOtp';
import { useForm } from 'react-hook-form';

export default function BaseOtpTest() {
  const { control } = useForm();
  return (
    <div>
      <BaseOtp
        name="testOtp"
        valueLength={6}
        dir="ltr"
        control={control}
        size="responsive"
        pureError="there is an error there is an errorthere is an error v there is an error there is an error there is an error there is an error there is an error"
        hiddenError
      />
    </div>
  );
}
