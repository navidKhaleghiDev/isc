// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseButton } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'atoms/BaseButton',
  component: BaseButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: ` This BaseButton component renders a customizable button.
          `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'kalameh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },

    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'red', 'neutral', 'tertiary'],
    },

    loading: { control: 'boolean' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
