import { useForm } from 'react-hook-form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { BaseOtp } from '.';

// Custom Types for storyBook

type StoryPasswordInput = StoryObj<typeof BaseOtp>;

// Main instruction for story
const meta: Meta<typeof BaseOtp> = {
  title: 'atoms/inputs/BaseOtp',
  component: BaseOtp,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseOtp',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    name: 'BaseOtp',
  },
  render: (args) => (
    <BaseOtp
      valueLength={args.valueLength}
      name={args.name}
      className={args.className}
      dir={args.dir}
      disabled={args.disabled}
      fullWidth={args.fullWidth}
      hiddenError={args.hiddenError}
      intent={args.intent}
      ltrPlaceHolder={args.ltrPlaceHolder}
      pureError={args.pureError}
      rules={args.rules}
      control={args.control}
    />
  ),
  // Adding font family
  decorators: [
    (Story) => (
      <div className="font-kalameh">
        <Story />
      </div>
    ),
  ],
};

// to use this component we need to add function because of
// control of useForm hook
const RenderBaseInput: StoryFn<typeof BaseOtp> = function RenderBaseInput(
  args
) {
  const {
    className,
    dir,
    disabled,
    fullWidth,
    hiddenError,
    intent,
    ltrPlaceHolder,
    pureError,
    rules,
    name,
    valueLength,
  } = args;
  const { control } = useForm();
  return (
    <BaseOtp
      valueLength={valueLength}
      className={className}
      dir={dir}
      disabled={disabled}
      fullWidth={fullWidth}
      hiddenError={hiddenError}
      intent={intent}
      ltrPlaceHolder={ltrPlaceHolder}
      pureError={pureError}
      rules={rules}
      control={control}
      name={name}
    />
  );
};

export const passWordInput: StoryPasswordInput = {
  render: RenderBaseInput,
  args: {
    name: 'userPassword',
  },
};

export default meta;
