import { Meta, StoryObj } from '@storybook/react/*';
import { ReactElement } from 'react';
import { SingleRangeSlider } from './SingleRangeSlider';

const meta: Meta<typeof SingleRangeSlider> = {
  title: 'atoms/Slider',
  component: SingleRangeSlider,
  tags: ['autodocs'],
  parameters: {
    Layout: 'center',
    docs: {
      description: {
        component: `
          This Slider component.
          `,
      },
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
export const Default: Story = {};
