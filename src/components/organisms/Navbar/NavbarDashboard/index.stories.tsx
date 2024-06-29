import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IUserWithAuth, UserContext } from '@context/user/userContext';
import { NavbarDashboard } from '.';

const meta: Meta<typeof NavbarDashboard> = {
  title: 'molecules/NavbarDashboard',
  component: NavbarDashboard,
  tags: ['autodocs'],
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

export const SuperUser: StoryObj<ITemplateProps> = {
  args: {
    user: {
      id: '2',
      first_name: 'محمد',
      last_name: 'بازرگان',
      email: 'mohammad.bazargan.adminUSer@example.com',
      is_superuser: true,
      is_admin: false,
    },
  },
};

export const AdminUser: StoryObj<ITemplateProps> = {
  args: {
    user: {
      id: '3',
      first_name: 'محمد',
      last_name: 'بازرگان',
      email: 'admin.user@example.com',
      is_superuser: false,
      is_admin: true,
    },
  },
};
