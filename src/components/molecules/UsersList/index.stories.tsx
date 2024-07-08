import { Meta, StoryObj } from '@storybook/react';
import { UsersList } from './index';

const meta: Meta<typeof UsersList> = {
  title: 'molecules/UsersList',
  parameters: {
    docs: {
      description: {
        component: `UsersList component fetches and displays a list of users.`,
      },
    },
  },
  component: UsersList,
  tags: ['autodocs'],
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
  args: {},
};
