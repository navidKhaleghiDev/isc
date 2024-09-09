import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseSwitch } from './BaseSwitch';

type StoryBaseSwitch = StoryObj<typeof BaseSwitch>;

const meta: Meta<typeof BaseSwitch> = {
  title: 'atoms/BaseSwitch',
  component: BaseSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseSwitch component',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    pureOnChange: fn(),
    name: 'base switch',
    size: 'medium',
    label: 'Toggle',
    pureValue: true,
  },
  argTypes: {
    size: {
      options: ['small', 'medium'],
    },
    pureValue: {
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'kalameh' }}>
        <Story />
      </div>
    ),
  ],

  render: (args) => (
    <BaseSwitch
      name={args.name}
      size={args.size}
      label={args.label}
      pureOnChange={args.pureOnChange}
      pureValue={args.pureValue}
      ltrLabel={args.ltrLabel}
      disabled={args.disabled}
      pureError={args.pureError}
      defaultChecked={args.defaultChecked}
    />
  ),
};

export default meta;

export const defaultSwitch: StoryBaseSwitch = {
  args: {
    name: 'defaultSwitch',
    size: 'medium',
    pureValue: false,
  },
};
