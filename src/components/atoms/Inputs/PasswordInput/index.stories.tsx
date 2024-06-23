import { useForm } from 'react-hook-form';
import { PasswordInput } from '.';

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from '@storybook/react';

type StoryPasswordInput = StoryObj<typeof PasswordInput>;

// Main instruction for story
const meta: Meta<typeof PasswordInput> = {
  title: 'atoms/inputs/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  //Adding font family
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
const renderBaseInput: StoryFn<typeof PasswordInput> = (args) => {
  const { control } = useForm();
  return <PasswordInput control={control} {...args} />;
};

export const passWordInput: StoryPasswordInput = {
  render: renderBaseInput,
  args: {
    name: 'userPassword',
    placeholder: 'گذرواژه',
    label: 'گذرواژه',
  },
};

export default meta;
