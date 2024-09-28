import { Meta, StoryObj } from '@storybook/react';

import { ReactElement } from 'react';
import { Toast } from './Toast';

const meta = {
  title: 'atoms/toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
                نمایش نوتیف شناور و زمان دار با استفاده از کتابخانه Toast با سه حالت Success, Error و info.
                Displays timed floating notifications using the Toast library with three states: Success, Error, and info.
                `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    className: 'font-kalameh',
  },
  argTypes: {
    status: {
      control: {
        type: 'select',
      },
      options: ['success', 'error', 'info'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'responsive'],
    },
    message: { control: 'text' },
    dir: {
      control: {
        type: 'radio',
      },
      options: ['rtl', 'ltr'],
      defaultValue: 'rtl',
    },
  },
  decorators: [
    (Story, context): ReactElement => {
      const { dir } = context;
      return (
        <div
          className="container mx-auto justify-center min-h-40"
          style={{ direction: dir }}
        >
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Displays a notification in Default status.
 */
export const Default: Story = {
  args: {
    status: 'success',
    message: 'این یک پیغام عمومی می باشد.',
    dir: 'ltr',
    size: 'responsive',
  },
};
