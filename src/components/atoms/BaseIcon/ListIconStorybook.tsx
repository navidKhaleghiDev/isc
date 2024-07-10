import { Icon } from '@iconify/react';
import { baseIconStyles } from './styles';

export interface IIconListStorybook {
  color: 'neutral' | 'red' | 'teal' | 'tealLink' | 'yellow';
  size: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  hoverColor: 'default' | 'primary';
  className?: string;
  icons: string[];
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
}: IIconListStorybook) {
  return (
    <div className="flex flex-wrap space-4 w-full justify-between">
      {icons.map((icon: string) => (
        <div key={icon} className="flex flex-col items-center p-3" title={icon}>
          <Icon
            className={baseIconStyles({ size, color, hoverColor, className })}
            icon={icon}
          />
        </div>
      ))}
    </div>
  );
}
