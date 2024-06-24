import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta = {
  title: 'atoms/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
                نمایش نوتیفیکیشن اختصاصی که وضعیت های مختلف success و error دارد و در اندازه های مختلف قابل تنظیم است و از قسمت کنترل میتوان تغیییرات هر یک را بررسی کرد<div className=""></div>
                Displays a custom notification with success and error states, adjustable to various sizes. Changes can be reviewed from the control panel.
                `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    outline: {
      control: {
        type: 'select',
      },
      options: ['success', 'error'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'fullWidth'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['success', 'error'],
    },
  },
  decorators: [
    (Story): ReactElement => (
      <div dir="rtl" className="font-on" style={{ width: '60vw' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * This notification displays success messages.
 */
export const Success: Story = {
  args: {
    title: 'ورود با موفقیت انجام شد.',
    outline: 'success',
    size: 'fullWidth',
    type: 'success',
  },
};

/**
 * This notification displays error messages.
 */
export const Error: Story = {
  args: {
    title: 'در حال حاضر دسترسی به این بخش مقدور نمی باشد.',
    outline: 'error',
    size: 'fullWidth',
    type: 'error',
  },
};

/**
 * This notification displays full screen.
 */
export const FullWidthSize: Story = {
  args: {
    title: 'ورود با موفقیت انجام شد.',
    outline: 'success',
    size: 'fullWidth',
    type: 'success',
  },
};

/**
 * This notification displays large size.
 */
export const LargeSize: Story = {
  args: {
    title: 'ورود با موفقیت انجام شد.',
    outline: 'success',
    size: 'lg',
    type: 'success',
  },
};

/**
 * This notification displays medium size.
 */
export const MediumSize: Story = {
  args: {
    title: 'ورود با موفقیت انجام شد.',
    outline: 'success',
    size: 'md',
    type: 'success',
  },
};

/**
 * This notification displays small size.
 */
export const SmallSize: Story = {
  args: {
    title: 'ورود با موفقیت انجام شد.',
    outline: 'success',
    size: 'sm',
    type: 'success',
  },
};
