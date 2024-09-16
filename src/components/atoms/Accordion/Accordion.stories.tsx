import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'atoms/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          This Accordion component allows for expandable and collapsible content sections.
          `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    classNameTittle: { control: 'text' },
    classNameContent: { control: 'text' },
  },
  args: {
    id: '1',
    title: <h3>داشبورد</h3>,
    content: (
      <div>
        <p>توضیحات</p>
      </div>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion title={args.title} id={args.id} content={args.content} />
  ),
  args: {
    id: '1',
    title: <h3>داشبورد</h3>,
    content: (
      <div>
        <p>توضیحات</p>
      </div>
    ),
  },
};
