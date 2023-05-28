import { SearchInput } from '@ui/atoms/Inputs/SearchInput';
import { Avatar } from '@ui/atoms/Avatar';
import { Typography } from '@ui/atoms/Typography/Typography';

/* eslint-disable jsx-a11y/anchor-is-valid */
export function Navbar() {
  return (
    <nav className="bg-white w-full px-8 mb-1 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <a href="#" className="ml-4">
            <Avatar />
          </a>
          <div>
            <Typography type="h3" weight="bold" color="primary">
              مهدی بازرگان
            </Typography>
            <Typography size="sm" color="primary">
              ادمین
            </Typography>
          </div>
        </div>
        {/* search and button */}
        <SearchInput name="search" id="search" size="sm" />
      </div>
    </nav>
  );
}
