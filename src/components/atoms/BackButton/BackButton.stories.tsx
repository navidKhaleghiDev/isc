import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'atoms/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
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

export const IconOnly: Story = {
  args: {
    withLabel: false,
    backToReferrer: true,
  },
};

export const CustomOnClick: Story = {
  args: {
    onClick: () => alert('Custom onClick handler'),
    backToReferrer: false,
  },
};
