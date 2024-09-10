import { useForm } from 'react-hook-form';
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import { Dropdown } from '.';

// Custom Types for storyBook

type StoryDropdown = StoryObj<typeof Dropdown>;

// Main instruction for story
const meta: Meta<typeof Dropdown> = {
  title: 'atoms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',

    docs: {
      description: {
        component: 'DropDown',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    options: [
      { id: '1', label: 'selected' },
      { id: '2', label: 'postponed' },
      { id: '3', label: 'removed' },
      { id: '4', label: 'added' },
      { id: '5', label: 'replace' },
    ],
    placeHolder: 'select',
    name: 'DropDown',
    defaultValue: 'selected',
    label: 'select',
  },
  render: (args) => (
    <Dropdown
      name={args.name}
      id={args.id}
      options={args.options}
      placeHolder={args.placeHolder}
      loading={args.loading}
      rules={args.rules}
      defaultValue={args.defaultValue}
      fullWidth={args.fullWidth}
      className={args.className}
      label={args.label}
      control={args.control}
      multiple={args.multiple}
    />
  ),
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on', height: '20rem' }}>
        <Story />
      </div>
    ),
  ],
};

const RenderDropdown: StoryFn<typeof Dropdown> = function RenderDropdown(args) {
  const { loading, leftLabel, id, name, options, placeHolder, multiple } = args;
  const { control } = useForm();

  return (
    <Dropdown
      control={control}
      loading={loading}
      id={id}
      name={name}
      options={options}
      placeHolder={placeHolder}
      leftLabel={leftLabel}
      multiple={multiple}
    />
  );
};

export const dropDown: StoryDropdown = {
  render: RenderDropdown,
  args: {
    loading: false,
  },
};

export default meta;
