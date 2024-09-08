import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import X from '@iconify-icons/ph/x';
import { ChipButton } from './ChipButton';

const meta: Meta<typeof ChipButton> = {
  title: 'atoms/ChipButton',
  component: ChipButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: ` This ChipButton component renders a customizable chip button with an optional icon.
          `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'kalameh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['default', 'green', 'yellow', 'lightGray'],
    },
    label: {
      control: 'text',
    },
    icon: {
      control: {
        type: 'object',
      },
    },
    disabled: { control: 'boolean' },
    onClickIcon: { action: 'clicked' },
  },
  args: { onClick: fn(), label: 'Chip Button' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Chip',
    color: 'default',
    disabled: false,
    icon: undefined,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Chip with Icon',
    color: 'green',
    disabled: false,
    icon: X,
  },
};
