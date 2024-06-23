import { type Meta, type StoryObj } from '@storybook/react';
import { BaseCheckBox } from '.';

// Custom Types for storyBook

type StoryBaseCheckBox = StoryObj<typeof BaseCheckBox>;

// Main instruction for story
const meta: Meta<typeof BaseCheckBox> = {
  title: 'atoms/inputs/BaseCheckBox',
  component: BaseCheckBox,
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'checkbox',
    id: 'check',
    intent: 'default',
    size: 'md',
    label: 'checkbox',
  },
  argTypes: {
    pureOnChange: { action: 'pure on change' },
  },
  tags: ['autodocs'],
  // Adding font family
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],
};

// Define different stories base on size and error
export const defaultCheckBox: StoryBaseCheckBox = {
  args: {
    intent: 'default',
    size: 'xl',
  },
};

export const errorCheckBox: StoryBaseCheckBox = {
  args: {
    intent: 'error',
    size: 'xl',
  },
};

export default meta;
