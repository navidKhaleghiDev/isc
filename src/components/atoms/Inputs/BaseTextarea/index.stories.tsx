import { useForm } from 'react-hook-form';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BaseTextarea } from '.';

// Custom Types for storyBook

type StoryBaseTextarea = StoryObj<typeof BaseTextarea>;

// Main instruction for story
const meta: Meta<typeof BaseTextarea> = {
  title: 'atoms/inputs/BaseTextarea',
  component: BaseTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseTextArea',
      },
    },
  },

  tags: ['autodocs'],
  args: {
    name: 'textArea',
    id: 'textArea',
    placeholder: 'متن خود را وارد کنید',
    className: 'border-2 border-cyan-600',
  },
  render: (args) => (
    <BaseTextarea
      name={args.name}
      id={args.id}
      placeholder={args.placeholder}
      label={args.label}
      intent={args.intent}
      size={args.size}
      control={args.control}
      className={args.className}
      defaultValue={args.defaultValue}
      fullWidth={args.fullWidth}
      hiddenError={args.hiddenError}
      rules={args.rules}
      setError={args.setError}
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
const renderBaseTextarea: StoryFn<typeof BaseTextarea> =
  function RenderBaseTextarea(args) {
    const {
      id,
      name,
      placeholder,
      intent,
      defaultValue,
      fullWidth,
      size,
      label,
      rules,
      hiddenError,
      setError,
    } = args;
    const { control } = useForm();

    return (
      <BaseTextarea
        control={control}
        id={id}
        name={name}
        placeholder={placeholder}
        intent={intent}
        label={label}
        size={size}
        className={args.className}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        hiddenError={hiddenError}
        rules={rules}
        setError={setError}
      />
    );
  };

// Define different stories based on size & intent
export const textInputDefault: StoryBaseTextarea = {
  render: renderBaseTextarea,
  args: {
    id: 'userMassage',
    name: 'userMessage',
    placeholder: 'متن خود را وارد  کنید',
    intent: 'default',
  },
};

export default meta;
