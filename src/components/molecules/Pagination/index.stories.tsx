import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'molecule/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    onPageChange: { action: 'pageChanged' },
  },
  args: {
    onPageChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 7,
  },
};

export const MobileTablet: Story = {
  args: {
    currentPage: 3,
    totalPages: 3,
  },
};

export const Desktop: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
  },
};
