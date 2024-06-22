import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { LinkButton } from './index';

const meta: Meta<typeof LinkButton> = {
  title: 'atom/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'text' },
    skip: { control: 'boolean' },
    onClick: { action: 'clicked' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    submit: { control: 'boolean' },
    className: { control: 'text' },
    startIcon: { control: 'text' },
    endIcon: { control: 'text' },
    loading: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    },
    type: {
      control: {
        type: 'select',
        options: [
          'default',
          'inactive',
          'shadow',
          'secondary',
          'red',
          'tealLink',
          'neutral',
        ],
      },
    },
    fullWidth: { control: 'boolean' },
  },
  args: {
    link: '/',
    label: 'Link ',
    size: 'md',
    type: 'default',
    submit: false,
    disabled: false,
    loading: false,
    skip: false,
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithStartIcon: Story = {
  args: {
    startIcon: 'fa:home',
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: 'ph:arrow-right',
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
};

export const SubmitType: Story = {
  args: {
    submit: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

// export const SkippedLink: Story = {
//   args: {
//     skip: false,
//   },
// };
