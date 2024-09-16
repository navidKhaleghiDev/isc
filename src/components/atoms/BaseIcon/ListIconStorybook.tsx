import { Icon, IconifyIcon } from '@iconify/react';
import { baseIconStyles } from './styles';
import { IBaseIcon } from './types';

export interface IIconListStorybook {
  color: IBaseIcon['color'];
  size: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  hoverColor: 'default' | 'primary';
  className?: string;
  icons: (string | IconifyIcon)[];
  title: string[];
}

/**
 * This function is used exclusively for Storybook to display a consolidated list of icons and is not used elsewhere in the application.
 * @param {color, size, hoverColor, className, icons}
 * @returns
 */
export function IconListStorybook({
  color,
  size,
  hoverColor,
  className,
  icons = ['fa:home'],
  title,
}: IIconListStorybook) {
  return (
    <div className="flex flex-wrap space-4 w-full justify-between">
      {icons.map((icon, indexKey) => (
        <div
          className="flex flex-col items-center p-2.5 bg-neutral-100 rounded m-2"
          title={title[indexKey]}
          key={title[indexKey]}
        >
          <Icon
            className={baseIconStyles({ size, color, hoverColor, className })}
            icon={icon}
          />
        </div>
      ))}
    </div>
  );
}
