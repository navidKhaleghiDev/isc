import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MultiBaseSlider } from './MultiBaseSlider';

const meta: Meta<typeof MultiBaseSlider> = {
  title: 'atoms/Slider/MultiBaseSlider',
  component: MultiBaseSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          This MultiBaseSlider component.
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
    initialMin: 20,
    initialMax: 80,
  },
};
