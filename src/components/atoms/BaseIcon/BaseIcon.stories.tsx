import { BaseIcon } from './BaseIcon';
import { IBaseIcon } from './types';

/**
 *
 * An object containing icon names used in the project, selectable via a dropdown field.
 * If icon names in the project change, please update only this object.
 * Keys of this object are icon names and values are their respective Address.
 *
 */
const iconOptions = {
  User: 'ph:user',
  RoundLogin: 'ic:round-login',
  UserPlus: 'iconoir:user-plus',
  CalendarCheck: 'ph:calendar-check',
  Cube: 'ph:cube',
  Rows: 'ph:rows',
  ArrowLeft: 'iconamoon:arrow-left-2-thin',
  GearSix: 'ph:gear-six',
  Monitor: 'ph:monitor',
  Devices: 'ph:devices',
  UsersThree: 'ph:users-three',
  LogoutSharp: 'material-symbols:logout-sharp',
  MoreVertical: 'jam:more-vertical',
  BaselinePlus: 'ic:baseline-plus',
  Bake: 'ep:back',
  TrashSimple: 'ph:trash-simple',
};

const meta = {
  title: 'atoms/IconsList',
  component: BaseIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          از بخش کنترل امکان تغییر نام آیکون، رنگ و سایز وجود دارد. 
          The control panel allows changing the icon name, color, and size.
          `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(iconOptions),
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'red', 'teal', 'tealLink', 'yellow'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'],
    },
    hoverColor: { control: 'color' },
    className: { control: 'text' },
  },
};

export default meta;

/**
 * This function is defined by default to pass these properties to the main component.
 * @param args {icon, color, size, hoverColor, className}
 * @returns
 */
export function Default({
  icon,
  color,
  size,
  hoverColor,
  className,
}: IBaseIcon) {
  const iconValue = iconOptions[icon as keyof typeof iconOptions];
  return (
    <BaseIcon
      icon={iconValue}
      color={color}
      size={size}
      hoverColor={hoverColor}
      className={className}
    />
  );
}

Default.args = {
  icon: 'User',
  color: 'teal',
  size: 'xxxl',
  hoverColor: 'default',
  className: '',
};

/**
 * The "user" icon is chosen as a sample from the available icons in the project.
 * @param args {icon, color, size, hoverColor, className}
 * @returns
 */
export function User({ icon, color, size, hoverColor, className }: IBaseIcon) {
  const iconValue = iconOptions[icon as keyof typeof iconOptions];
  return (
    <BaseIcon
      icon={iconValue}
      color={color}
      size={size}
      hoverColor={hoverColor}
      className={className}
    />
  );
}

User.args = {
  icon: 'User',
  color: 'teal',
  size: 'xxxl',
  hoverColor: 'default',
  className: '',
};
