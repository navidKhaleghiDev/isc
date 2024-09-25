import { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from './ToggleButton';
import { ToggleButtonProps } from './types';

type StoryToggleButton = StoryObj<typeof ToggleButton>;

const meta: Meta<typeof ToggleButton> = {
  title: 'atoms/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'ToggleButton component that allows selecting one of the provided button options.',
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
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'responsive'],
    },
  },
};
export default meta;

function RenderToggleButton({
  buttonOption,
  onChange,
  size,
}: ToggleButtonProps) {
  return (
    <ToggleButton buttonOption={buttonOption} onChange={onChange} size={size} />
  );
}
export const toggleButton: StoryToggleButton = {
  render: RenderToggleButton,
  args: {
    buttonOption: [
      { id: 1, label: 'هفتگی', name: 'weekly' },
      { id: 2, label: 'ماهانه', name: 'monthly' },
      { id: 3, label: 'سالانه', name: 'yearly' },
    ],
    size: 'md',
  },
};
