import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseCheckBox } from '.';

// Custom Types for storyBook

type StoryBaseCheckBox = StoryObj<typeof BaseCheckBox>;

// Main instruction for story
const meta: Meta<typeof BaseCheckBox> = {
  title: 'atoms/inputs/BaseCheckBox',
  component: BaseCheckBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseCheckBox',
      },
    },
  },
  args: {
    name: 'checkbox',
    id: 'check',
    intent: 'default',
    size: 'md',
    label: 'checkbox',
    pureOnChange: fn(),
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    intent: {
      control: {
        type: 'select',
      },
      options: ['default', 'error'],
    },
  },
  tags: ['autodocs'],
  // Adding font family
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <BaseCheckBox
      id={args.id}
      name={args.name}
      checked={args.checked}
      pureError={args.pureError}
      control={args.control}
      className={args.className}
      size={args.size}
      defaultValue={args.defaultValue}
      hiddenError={args.hiddenError}
      intent={args.intent}
      ltrLabel={args.ltrLabel}
      label={args.label}
      rules={args.rules}
      pureValue={args.pureValue}
    />
  ),
};

// Define different stories base on size and error
export const defaultCheckBox: StoryBaseCheckBox = {
  args: {
    intent: 'default',
    size: 'md',
  },
};

export default meta;
