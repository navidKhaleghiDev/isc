import { Meta, StoryObj } from '@storybook/react';
import { ReactElement } from 'react';
import { Modal } from './Modal';

const meta = {
  title: 'molecules/modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
              نمایش و عدم نمایش مودال ها و پیام داخل هر مودال از قسمت کنترل قابل ویرایش است. 
              Controls the visibility and messages of modals, editable from the control panel.
              `,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    classContainer: 'font-on',
  },
  argTypes: {},
  decorators: [
    (Story): ReactElement => (
      <div
        style={{
          padding: '3em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
          direction: 'rtl',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const setModalSuccess = (): void => {};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const setModalDelete = (): void => {};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const handleRequestSuccess = (): void => {
  // eslint-disable-next-line no-alert
  alert('با موفقیت ویرایش شد');
};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const handleRequestDelete = (): void => {
  // eslint-disable-next-line no-alert
  alert('با موفقیت حذف شد');
};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const toggleModalDelete = (): void => {};

/**
 * This modal displays success messages.
 */
export const Success: Story = {
  args: {
    open: true,
    setOpen: setModalSuccess,
    buttonOne: {
      label: 'بله',
      onClick: handleRequestSuccess,
    },
    buttonTow: {
      label: 'خیر',
      onClick: toggleModalDelete,
      color: 'red',
    },
    title: 'ویرایش با موفقیت انجام شد',
    type: 'success',
  },
};

/**
 * This modal displays error messages.
 */
export const Error: Story = {
  args: {
    open: true,
    setOpen: setModalDelete,
    buttonOne: {
      label: 'بله',
      onClick: handleRequestDelete,
    },
    buttonTow: {
      label: 'خیر',
      onClick: toggleModalDelete,
      color: 'red',
    },
    title: 'از حذف این قانون مطمئن هستید؟',
    type: 'error',
  },
};

/**
 * This modal displays hint messages.
 */
export const None: Story = {
  args: {
    open: true,
    setOpen: setModalDelete,
    buttonOne: {
      label: 'بله',
      onClick: handleRequestDelete,
    },
    buttonTow: {
      label: 'خیر',
      onClick: toggleModalDelete,
      color: 'red',
    },
    title: 'از حذف این قانون مطمئن هستید؟',
    type: 'none',
  },
};
