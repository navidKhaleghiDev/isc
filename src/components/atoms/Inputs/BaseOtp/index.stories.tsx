import { type Meta, type StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { StoryFn } from '@storybook/react';
import { BaseOtp } from '.';

// Type definition for a story based on BaseInput
type StoryBaseInput = StoryObj<typeof BaseOtp>;

// Main instruction for story
const meta: Meta<typeof BaseOtp> = {
  title: 'atoms/inputs/BaseOtp',
  component: BaseOtp,
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
    name: 'base input',
    intent: 'default',
    size: 'md',
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
    <BaseOtp
      control={args.control}
      name={args.name}
      valueLength={args.valueLength}
      className={args.className}
      dir={args.dir}
      fullWidth={args.fullWidth}
      intent={args.intent}
      ltrPlaceHolder={args.ltrPlaceHolder}
      pureError={args.pureError}
      rules={args.rules}
      size={args.size}
    />
  ),
};

export default meta;

// to use this component we need to add function because of
// control of useForm hook
const RenderBaseOtp: StoryFn<typeof BaseOtp> = function RenderBaseOtp(args) {
  const { name, valueLength } = args;
  const { control } = useForm();
  return <BaseOtp valueLength={valueLength} control={control} name={name} />;
};

// Defining  stories based on size & intent
export const defaultInput: StoryBaseInput = {
  render: RenderBaseOtp,
  args: {
    intent: 'default',
    size: 'md',
  },
};
