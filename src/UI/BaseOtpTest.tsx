import { BaseOtp } from '@ui/atoms/Inputs/BaseOtp';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormType {
  otpPassword: number;
}

export default function BaseOtpTest() {
  const { control, handleSubmit } = useForm<FormType>();
  const [otpValue, setOtpValue] = useState<number>();
  return (
    <form
      onSubmit={handleSubmit((data) => setOtpValue(data.otpPassword))}
      className="font-kalameh"
      dir="rtl"
    >
      <BaseOtp
        name="otpPassword"
        valueLength={6}
        dir="ltr"
        control={control}
        size="md"
        disabled
        // pureError="there is an error there is an errorthere is an error v there is an error there is an error there is an error there is an error there is an error"
        // hiddenError
      />
      <p>{otpValue ?? ''}</p>
      <button type="submit">Submit The Button</button>
    </form>
  );
}
