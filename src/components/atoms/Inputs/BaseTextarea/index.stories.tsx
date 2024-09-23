import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BaseTextarea } from './index';

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
    className: 'border-2 border-cyan-600',
  },
  render: (args) => (
    <BaseTextarea
      name={args.name}
      onChange={args.onChange}
      id={args.id}
      placeholder={args.placeholder}
      label={args.label}
      intent={args.intent}
      disabled={args.disabled}
      dir={args.dir}
      error={args.error}
      value={args.value}
      size={args.size}
      className={args.className}
      defaultValue={args.defaultValue}
      fullWidth={args.fullWidth}
      hiddenError={args.hiddenError}
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
      onChange,
      fullWidth,
      size,
      label,
      hiddenError,
      setError,
    } = args;

    return (
      <BaseTextarea
        onChange={onChange}
        disabled={args.disabled}
        dir={args.dir}
        value={args.value}
        error={args.error}
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
    placeholder: 'Label',
    label: 'my App Label',
  },
};

export default meta;
