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
    classContainer: 'font-kalameh',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['error', 'success', 'none'],
    },
  },
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
const setModal = (): void => {};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const handleRequest = (): void => {
  // eslint-disable-next-line no-alert
  alert('با موفقیت ویرایش شد');
};

/**
 * These functions are defined as samples because they are part of the main component's props.
 */
const toggleModal = (): void => {};

/**
 * This modal displays default messages.
 */
export const Default: Story = {
  args: {
    open: true,
    type: 'success',
    title: 'ویرایش با موفقیت انجام شد',
    setOpen: setModal,
    buttonOne: {
      label: 'بله',
      onClick: handleRequest,
    },
    buttonTow: {
      label: 'خیر',
      onClick: toggleModal,
      color: 'red',
    },
  },
};
