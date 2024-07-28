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
                نمایش نوتیف شناور و زمان دار با استفاده از کتابخانه Toast با سه حالت Success, Error و Default.
                Displays timed floating notifications using the Toast library with three states: Success, Error, and Default.
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
    message: { control: 'text' },
  },
  decorators: [
    (Story): ReactElement => (
      <div
        style={{
          width: '50vw',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          direction: 'rtl',
        }}
      >
        <Story />
      </div>
    ),
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
  },
};
