import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DoubleRangeSlider } from './DoubleRangeSlider';

const meta: Meta<typeof DoubleRangeSlider> = {
  title: 'atoms/Slider/DoubleRangeSlider',
  component: DoubleRangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          This DoubleRangeSlider component.
          `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
      description: 'Minimum value for the slider',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value for the slider',
    },
    initialMin: {
      control: { type: 'number' },
      description: 'Initial minimum value selected',
    },
    initialMax: {
      control: { type: 'number' },
      description: 'Initial maximum value selected',
    },
    step: {
      control: { type: 'number' },
      description: 'Step size for slider',
    },
    onChange: {
      action: 'changed',
      description: 'Callback on value change',
    },
  },
  decorators: [
    (Story): ReactElement => (
      <div className="w-full h-full p-4 bg-gray-100 flex justify-center items-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    initialMin: 20,
    initialMax: 80,
    step: 1,
  },
};
