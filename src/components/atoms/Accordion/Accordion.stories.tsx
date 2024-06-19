import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { accordionButtonData } from './dataMock';
import { IAccordion } from './types';

const meta: Meta<typeof Accordion> = {
  title: 'atom/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
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
  render: (args) => <Accordion {...args} />,
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

export const WithData: Story = {
  render: () => (
    <div>
      {accordionButtonData.map((item: IAccordion) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  ),
};
