import { BaseButton, BaseInput, Typography } from '@ui/atoms';
import { useForm } from 'react-hook-form';

export function AddUserPage() {
  const { control } = useForm();
  return (
    <div className="h-full flex flex-col justify-around items-center p-12 px-32">
      <div className="w-full">
        <div className="mb-8">
          <Typography size="h4" color="teal">
            کاربر شماره یک
          </Typography>
        </div>
        <div className="grid gap-5 grid-cols-3">
          <BaseInput
            name="name"
            id="name"
            control={control}
            label="نام"
            placeholder="بنویسید"
            fullWidth
          />
          <BaseInput
            name="family"
            id="family"
            control={control}
            label="نام خانوادگی"
            placeholder="بنویسید"
            fullWidth
          />
          <BaseInput
            name="email"
            id="email"
            control={control}
            label="آدرس ایمیل"
            placeholder="بنویسید"
            fullWidth
          />
          <BaseInput
            name="password"
            id="password"
            control={control}
            label="گذرواژه"
            placeholder="بنویسید"
            fullWidth
          />
          <BaseInput
            name="date"
            id="date"
            type="date"
            control={control}
            label="تاریخ و زمان"
            placeholder="1402/02/23  -  11:25 AM"
            fullWidth
          />
          <BaseInput
            name="phone"
            id="phone"
            control={control}
            label="شماره تماس"
            placeholder="بنویسید"
            fullWidth
          />
        </div>
      </div>
      <BaseButton label="اضافه کردن کاربر جدید" size="xl" />
    </div>
  );
}
