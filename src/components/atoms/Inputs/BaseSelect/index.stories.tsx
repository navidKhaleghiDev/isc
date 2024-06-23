import { useForm } from 'react-hook-form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BaseSelect } from '.';

// Custom Types for storyBook

type StoryBaseSelect = StoryObj<typeof BaseSelect>;

// Main instruction for story
const meta: Meta<typeof BaseSelect> = {
  title: 'atoms/inputs/BaseSelect',
  component: BaseSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'select',
    id: 'select',
    placeholder: 'انتخاب',
    intent: 'default',
  },
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
const RenderBaseSelect: StoryFn<typeof BaseSelect> = function RenderBaseSelect(
  args
) {
  const { id, name, placeholder } = args;
  const { control } = useForm();
  return (
    <BaseSelect
      control={control}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};

// stories that are base on size & intent
export const optionInputDefault: StoryBaseSelect = {
  render: RenderBaseSelect,
  args: {
    id: 'sort-as',
    name: 'sortAs',
    placeholder: 'بنویسید',
  },
};

export const optionInputError: StoryBaseSelect = {
  render: RenderBaseSelect,
  args: {
    id: 'sort-as',
    name: 'sortAs',
    placeholder: 'بنویسید',
    intent: 'error',
  },
};

export const optionInputSm: StoryBaseSelect = {
  render: RenderBaseSelect,
  args: {
    id: 'sort-as',
    name: 'sortAs',
    placeholder: 'بنویسید',
    size: 'sm',
  },
};

export const optionInputMd: StoryBaseSelect = {
  render: RenderBaseSelect,
  args: {
    id: 'sort-as',
    name: 'sortAs',
    placeholder: 'بنویسید',
    size: 'md',
  },
};

export const optionInputLg: StoryBaseSelect = {
  render: RenderBaseSelect,
  args: {
    id: 'sort-as',
    name: 'sortAs',
    placeholder: 'بنویسید',
    size: 'lg',
  },
};

export default meta;
