import { useForm } from 'react-hook-form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { PasswordInput } from '.';

// Custom Types for storyBook

type StoryPasswordInput = StoryObj<typeof PasswordInput>;

// Main instruction for story
const meta: Meta<typeof PasswordInput> = {
  title: 'atoms/inputs/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'PassWordInput',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  render: (args) => (
    <PasswordInput
      name={args.name}
      placeholder={args.placeholder}
      label={args.label}
      control={args.control}
    />
  ),
  // Adding font family
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],
};

// to use this component we need to add function because of
// control of useForm hook
const RenderBaseInput: StoryFn<typeof PasswordInput> = function RenderBaseInput(
  args
) {
  const { label, name, placeholder } = args;
  const { control } = useForm();
  return (
    <PasswordInput
      control={control}
      label={label}
      name={name}
      placeholder={placeholder}
    />
  );
};

export const passWordInput: StoryPasswordInput = {
  render: RenderBaseInput,
  args: {
    name: 'userPassword',
    placeholder: 'گذرواژه',
    label: 'گذرواژه',
  },
};

export default meta;
