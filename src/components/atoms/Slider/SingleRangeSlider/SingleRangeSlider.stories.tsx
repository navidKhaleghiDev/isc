import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SingleRangeSlider } from './SingleRangeSlider';

const meta: Meta<typeof SingleRangeSlider> = {
  title: 'atoms/Slider/SingleRangeSlider',
  component: SingleRangeSlider,
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
    initialValue: {
      control: { type: 'number' },
      description: 'Initial Value',
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
      <div>
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
    initialValue: 20,
    step: 1,
  },
};
