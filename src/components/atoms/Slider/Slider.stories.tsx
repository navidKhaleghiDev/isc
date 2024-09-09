import { Meta, StoryObj } from '@storybook/react/*';
import { ReactElement } from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'atoms/Slider',
  component: Slider,
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
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
