import { Meta, StoryObj } from '@storybook/react';
import { Radius } from './Radius';

const meta = {
  title: 'atoms/corner radius',
  component: Radius,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
                میزان border-radius در سه سایز کوچک متوسط و بزرگ که این سه حالت از بخش کنترل قابل تغییر است.
                The border-radius can be set to three sizes: small, medium, and large, adjustable from the control panel.
                `,
      },
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['Small', 'Medium', 'Large'],
    },
  },
} satisfies Meta<typeof Radius>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Display border-radius in Small status.
 */
export const Small: Story = {
  args: {
    size: 'Small',
  },
};

/**
 * Display border-radius in Medium status.
 */
export const Medium: Story = {
  args: {
    size: 'Medium',
  },
};

/**
 * Display border-radius in Large status.
 */
export const Large: Story = {
  args: {
    size: 'Large',
  },
};
