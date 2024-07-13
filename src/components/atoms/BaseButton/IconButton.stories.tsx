import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `This IconButton component renders a button with an icon.`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: [
        'teal',
        'tealNoBg',
        'redNoBg',
        'neutral',
        'yellow',
        'red',
        'white',
        'default',
      ],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'default'],
    },
    icon: { control: 'text' },
    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'iconoir:user-plus', // مثال آیکون
    color: 'teal',
    size: 'xl',
    loading: false,
  },
};
