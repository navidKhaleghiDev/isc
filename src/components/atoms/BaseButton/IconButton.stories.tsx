import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        type: 'select',
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
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'default'],
      },
    },
    icon: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['submit', 'button'],
      },
    },
    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'iconoir:user-plus', // مثال آیکون
    color: 'default',
    size: 'default',
    type: 'button',
    loading: false,
  },
};

export const Teal: Story = {
  args: {
    ...Default.args,
    color: 'teal',
  },
};

export const TealNoBg: Story = {
  args: {
    ...Default.args,
    color: 'tealNoBg',
  },
};

export const RedNoBg: Story = {
  args: {
    ...Default.args,
    color: 'redNoBg',
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    color: 'neutral',
  },
};

export const Yellow: Story = {
  args: {
    ...Default.args,
    color: 'yellow',
  },
};

export const Red: Story = {
  args: {
    ...Default.args,
    color: 'red',
  },
};

export const White: Story = {
  args: {
    ...Default.args,
    color: 'white',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const XLarge: Story = {
  args: {
    ...Default.args,
    size: 'xl',
  },
};

export const XXLarge: Story = {
  args: {
    ...Default.args,
    size: 'xxl',
  },
};

export const XXXLarge: Story = {
  args: {
    ...Default.args,
    size: 'xxxl',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};
