import { Meta, StoryObj } from '@storybook/react';

import { BaseSwitch } from './BaseSwitch';

const meta: Meta<typeof BaseSwitch> = {
  title: 'atoms/BaseSwitch',
  component: BaseSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `This BaseSwitch component renders a customizable switch.`,
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
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    onChange: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'switch',
    defaultChecked: false,
    disabled: false,
  },
};
