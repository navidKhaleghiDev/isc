import { useForm } from 'react-hook-form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { DatePicker } from '.';

// Custom Types for storyBook

type StoryDatePicker = StoryObj<typeof DatePicker>;

// Main instruction for story
const meta: Meta<typeof DatePicker> = {
  title: 'atoms/inputs/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'DatePicker',
      },
    },
  },
  args: {
    name: 'Data picker',
    id: 'DataPickerSolar',
    placeholder: 'تاریخ شمسی',
    intent: 'default',
    showTimePicker: false,
    format: 'YYYY/MM/DD',
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
    onClickIcon: { action: 'click icon' },
  },
  render: (args) => (
    <DatePicker
      name={args.name}
      id={args.id}
      type={args.type}
      label={args.label}
      intent={args.intent}
      max={args.max}
      min={args.min}
      ltrPlaceHolder={args.ltrPlaceHolder}
      placeholder={args.placeholder}
      size={args.size}
      control={args.control}
      className={args.className}
      endIcon={args.endIcon}
      defaultValue={args.defaultValue}
      fullWidth={args.fullWidth}
      format={args.format}
      rules={args.rules}
      startIcon={args.startIcon}
      maxDate={args.maxDate}
      minDate={args.minDate}
      showTimePicker={args.showTimePicker}
      dir={args.dir}
      iconButtonIcon={args.iconButtonIcon}
      hiddenError={args.hiddenError}
    />
  ),
  // Adding font family
  tags: ['autodocs'],
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
const renderDatePicker: StoryFn<typeof DatePicker> = function RenderDatePicker(
  args
) {
  const {
    id,
    name,
    showTimePicker,
    defaultValue,
    intent,
    ltrPlaceHolder,
    hiddenError,
    endIcon,
    label,
    dir,
    iconButtonIcon,
    format,
    placeholder,
    size,
    maxDate,
    fullWidth,
    minDate,
    rules,
    startIcon,
    onClickIcon,
  } = args;
  const { control } = useForm();
  return (
    <DatePicker
      control={control}
      id={id}
      name={name}
      showTimePicker={showTimePicker}
      ltrPlaceHolder={ltrPlaceHolder}
      placeholder={placeholder}
      label={label}
      intent={intent}
      size={size}
      endIcon={endIcon}
      defaultValue={defaultValue}
      fullWidth={fullWidth}
      format={format}
      rules={rules}
      startIcon={startIcon}
      maxDate={maxDate}
      minDate={minDate}
      dir={dir}
      iconButtonIcon={iconButtonIcon}
      hiddenError={hiddenError}
      onClickIcon={onClickIcon}
    />
  );
};

// Defining stories base on intent
export const datePickerDefault: StoryDatePicker = {
  render: renderDatePicker,
  args: {
    id: 'calenderPicker',
    name: 'solarCalender',
    showTimePicker: true,
  },
};

export default meta;
