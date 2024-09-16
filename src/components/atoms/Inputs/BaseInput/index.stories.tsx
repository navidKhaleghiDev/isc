import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BaseInput } from '.';

// Type definition for a story based on BaseInput
type StoryBaseInput = StoryObj<typeof BaseInput>;

// Main instruction for story
const meta: Meta<typeof BaseInput> = {
  title: 'atoms/inputs/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseInput',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    onClickIcon: fn(),
    pureOnChange: fn(),
    name: 'base input',
    intent: 'default',
    size: 'md',
    type: 'text',
    min: 5,
    max: 15,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'freeWidth'],
    },
    intent: {
      control: {
        type: 'select',
      },
      options: ['default', 'error'],
    },
  },
  // Adding font family
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],

  render: (args) => (
    <BaseInput
      name={args.name}
      id={args.id}
      type={args.type}
      placeholder={args.placeholder}
      label={args.label}
      intent={args.intent}
      max={args.max}
      min={args.min}
      size={args.size}
      className={args.className}
      defaultValue={args.defaultValue}
      endIcon={args.endIcon}
      ltrPlaceHolder={args.ltrPlaceHolder}
      fullWidth={args.fullWidth}
      startIcon={args.startIcon}
      hiddenError={args.hiddenError}
      iconButtonIcon={args.iconButtonIcon}
      rules={args.rules}
      ltrLabel={args.ltrLabel}
      control={args.control}
      pureError={args.pureError}
      pureValue={args.pureValue}
      pureOnChange={args.pureOnChange}
      onClickIcon={args.onClickIcon}
      setError={args.setError}
    />
  ),
};

export default meta;

// Defining  stories based on size & intent
export const defaultInput: StoryBaseInput = {
  args: {
    id: 'username',
    placeholder: 'نام کاربری',
    type: 'text',
    label: 'نام کاربری',
  },
};
