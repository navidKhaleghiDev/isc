import { Meta } from '@storybook/react';
import PencilSimple from '@iconify-icons/ph/pencil-simple';
import BellSimple from '@iconify-icons/ph/bell-simple';

import { Badge } from './Badge';
import { BadgeProps } from './types';

const icons = {
  pencil: PencilSimple,
  bell: BellSimple,
};

const meta = {
  title: 'atoms/Badge',
  component: Badge,
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
  args: {
    icon: icons.bell,
    color: 'red',
  },
  argTypes: {
    content: {
      control: {
        type: 'number',
      },
    },
    icon: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
      defaultValue: BellSimple,
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

export function Default({
  content,
  className,
  classNameIcon,
  size,
  color,
  loading,
  onClick,
  type,
  icon,
}: BadgeProps) {
  const iconValue = icons[icon as keyof typeof icons];
  return (
    <Badge
      content={content}
      className={className}
      classNameIcon={classNameIcon}
      size={size}
      color={color}
      loading={loading}
      onClick={onClick}
      type={type}
      icon={iconValue}
    />
  );
}
