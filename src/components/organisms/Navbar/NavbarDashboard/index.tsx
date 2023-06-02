import { Avatar } from '@ui/atoms/Avatar';
import { Typography } from '@ui/atoms/Typography/Typography';
import { BaseInput } from '@ui/atoms/Inputs';
import { useForm } from 'react-hook-form';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function NavbarDashboard() {
  const { control } = useForm();

  return (
    <nav className="bg-white w-full px-8 mb-1 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <a href="#" className="ml-4">
            <Avatar icon="ph:user" intent="primary" size="sm" />
          </a>
          <div>
            <Typography type="h3" weight="bold" color="teal">
              مهدی بازرگان
            </Typography>
            <Typography color="teal" size="caption">
              ادمین
            </Typography>
          </div>
        </div>
        {/* search and button */}
        <BaseInput
          control={control}
          name="search"
          id="search"
          placeholder="...جستجو"
          className="pl-10 self-baseline"
          startIcon="material-symbols:search"
          hiddenError
        />
      </div>
    </nav>
  );
}
