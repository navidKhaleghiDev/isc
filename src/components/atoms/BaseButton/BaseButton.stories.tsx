// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseButton } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'atoms/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    label: { control: 'text' },
    submit: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'default',
          'inactive',
          'shadow',
          'secondary',
          'red',
          'tealLink',
          'neutral',
        ],
      },
    },
    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// const Template: StoryFn<typeof BaseButton> = (args) => <BaseButton {...args} />;
export const Default: Story = {
  // render: Template,
  args: {
    label: 'Button',

    submit: false,
    fullWidth: false,
    disabled: false,
    size: 'md',
    type: 'default',
    loading: false,
  },
};

export const Inactive: Story = {
  args: {
    ...Default.args,
    type: 'inactive',
  },
};

export const Shadow: Story = {
  args: {
    ...Default.args,
    type: 'shadow',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    type: 'secondary',
  },
};

export const Red: Story = {
  args: {
    ...Default.args,
    type: 'red',
  },
};

export const TealLink: Story = {
  args: {
    ...Default.args,
    type: 'tealLink',
  },
};

export const Neutral: Story = {
  args: {
    ...Default.args,
    type: 'neutral',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
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

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
