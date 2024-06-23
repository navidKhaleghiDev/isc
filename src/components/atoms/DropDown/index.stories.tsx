import { useForm } from 'react-hook-form';
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import { Dropdown } from '.';
import { regexPattern } from '../Inputs';

// Custom Types for storyBook

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
    // Fake options for dopDown
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
const RenderDropdown: StoryFn<typeof Dropdown> = function RenderDropdown(args) {
  const { loading, id, name, options, placeHolder } = args;
  const { control } = useForm();

  return (
    <Dropdown
      control={control}
      loading={loading}
      id={id}
      name={name}
      options={options}
      placeHolder={placeHolder}
    />
  );
};

// Define different stories based loading state & label & size
export const dropDown: StoryDropdown = {
  render: RenderDropdown,
  args: {
    loading: false,
  },
};

export const dropDownLoading: StoryDropdown = {
  render: RenderDropdown,
  args: {
    loading: true,
  },
};

export const dropDownLeftLabel: StoryDropdown = {
  render: RenderDropdown,
  args: {
    leftLabel: true,
  },
};

export default meta;
