import { Meta, StoryObj } from '@storybook/react';
import { IUser } from '@src/services/client/users/types';
import { UserCard } from './index';

const meta: Meta<typeof UserCard> = {
  title: 'molecules/UserCard',
  parameters: {
    docs: {
      description: {
        component: `UserCard component displays user information and provides functionality to delete the user.`,
      },
    },
  },
  component: UserCard,
  argTypes: {
    mutateUserList: { action: 'mutateUserList' },
  },
  tags: ['autodocs'],
  args: {
    user: {
      id: '1',
      first_name: 'تحلیلگر',
      last_name: 'مانیتورینگ',
      email: 'admin@sadmin.com',
      date_joined: '2023-01-01',
    } as IUser,
    isHeader: false,
  },
  decorators: [
    (Story) => (
      <div dir="rtl" style={{ fontFamily: 'on' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isHeader: false,
  },
};
