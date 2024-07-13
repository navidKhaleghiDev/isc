import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IUserWithAuth, UserContext } from '@context/user/userContext';
import { NavbarDashboard } from '.';

const meta: Meta<typeof NavbarDashboard> = {
  title: 'organisms/NavbarDashboard',
  component: NavbarDashboard,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    first_name: { control: 'text' },
    last_name: { control: 'text' },
    email: { control: 'text' },
    is_superuser: { control: 'boolean' },
    is_admin: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'on' }} dir="rtl">
        <Router>
          <UserContext.Provider value={{ user: null, setUser: () => {} }}>
            <Story />
          </UserContext.Provider>
        </Router>
      </div>
    ),
  ],
};
export default meta;

interface ITemplateProps {
  user: Partial<IUserWithAuth> | null;
}

export const Default: StoryObj<ITemplateProps> = {
  args: {
    user: {
      id: '1',
      first_name: 'محمد',
      last_name: 'بازرگان',
      email: 'mohammad.bazargan@example.com',
      is_superuser: false,
      is_admin: false,
      // last_login: new Date(),
    },
  },
};
