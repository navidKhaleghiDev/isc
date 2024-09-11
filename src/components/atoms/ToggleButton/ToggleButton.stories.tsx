import { Meta, StoryObj } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './ToggleButton'; // Adjust the path as needed

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
  args: {
    buttonLabels: [
      { id: 1, label: 'هفتگی', name: 'weekly' },
      { id: 2, label: 'ماهانه', name: 'monthly' },
      { id: 3, label: 'سالانه', name: 'yearly' },
    ],
  },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on', height: '10rem' }}>
        <Story />
      </div>
    ),
  ],
};

function RenderToggleButton({ buttonLabels, onChange }: ToggleButtonProps) {
  return <ToggleButton buttonLabels={buttonLabels} onChange={onChange} />;
}
export const toggleButton: StoryToggleButton = {
  render: RenderToggleButton,
  args: {
    buttonLabels: [
      { id: 1, label: 'هفتگی', name: 'weekly' },
      { id: 2, label: 'ماهانه', name: 'monthly' },
      { id: 3, label: 'سالانه', name: 'yearly' },
    ],
  },
};

export default meta;
