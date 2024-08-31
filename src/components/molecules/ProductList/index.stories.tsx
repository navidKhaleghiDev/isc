import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ProductList } from '.';

/**
 * This molecule has been removed in the new design
 */
const meta = {
  title: 'molecules/ProductList',
  component: ProductList,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
                نمایش لیست محصولات
                Displays a list of products
                `,
      },
    },
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    (Story): ReactElement => (
      <div dir="rtl" className="font-kalameh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductList>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Displays a list of products.
 */
export const Default: Story = {};
