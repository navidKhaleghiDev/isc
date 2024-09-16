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
          از بخش کنترل امکان تغییر نام آیکون، رنگ و سایز، تعیین مقدار content و ... وجود دارد. 
          The control section, it is possible to change the icon name, color and size, determine the content value, etc.
                `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    icon: 'pencil',
    color: 'neutral',
    size: 'md',
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
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'pencil' },
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md'],
    },
    color: {
      control: {
        disable: true,
      },
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
  disabled
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
      disabled={disabled}
    />
  );
}
