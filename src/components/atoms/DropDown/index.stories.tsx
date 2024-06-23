import { useForm } from 'react-hook-form';
import { Dropdown } from '.';
import { regexPattern } from '../Inputs';

//Custom Types for storyBook
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';

type StoryDropdown = StoryObj<typeof Dropdown>;

// Main instruction for story
const meta: Meta<typeof Dropdown> = {
  title: 'atoms/Dropdown/Base DropDown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    //Fake options for dopDown
    options: [
      { id: '1', label: 'انجام شده' },
      { id: '2', label: 'به تعویق افتاده' },
      { id: '3', label: 'در حال انجام ' },
    ],
    placeHolder: 'Task',
    rules: {
      required: regexPattern.required,
    },
    name: 'DropDown',
    defaultValue: 'Task',
    label: 'task',
    loading: false,
  },
  // Adding (on) font-family
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],
};

// to use this component we need to add function because of
// {control} of useForm hook
const renderDropdown: StoryFn<typeof Dropdown> = (args) => {
  const { control } = useForm();

  return <Dropdown control={control} {...args} />;
};

// Define different stories based loading state & label & size
export const dropDown: StoryDropdown = {
  render: renderDropdown,
  args: {
    loading: false,
  },
};

export const dropDownLoading: StoryDropdown = {
  render: renderDropdown,
  args: {
    loading: true,
  },
};

export const dropDownLeftLabel: StoryDropdown = {
  render: renderDropdown,
  args: {
    leftLabel: true,
  },
};

export default meta;
