import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'text' },
    className: { control: 'text' },
    type: {
      control: 'select',
      option: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
    },
    weight: { control: 'text' },
  },
  decorators: [
    (Story): ReactElement => (
      <p style={{ textAlign: 'center', margin: '50px auto' }}>
        <Story />
      </p>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph1: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'body1',
    className: 'font-on',
  },
};
export const Paragraph2: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'body2',
    className: 'font-on',
  },
};
export const Paragraph3: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'body3',
    className: 'font-on',
  },
};

export const Paragraph4: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'body4',
    className: 'font-on',
  },
};
export const Caption: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'caption',
    weight: 'normal',
    className: 'font-on',
  },
};

export const weightLight: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'caption',
    className: 'font-on',
  },
};
export const weightBold: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'caption',
    weight: 'bold',
    className: 'font-on',
  },
};
export const WeightNormal: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'caption',
    weight: 'normal',
    className: 'font-on',
  },
};
export const WeightMedium: Story = {
  args: {
    children: 'متن',
    type: 'p',
    color: 'black',
    size: 'caption',
    weight: 'medium',
    className: 'font-on',
  },
};
export const Heading1: Story = {
  args: {
    children: 'عنوان',
    type: 'h1',
    color: 'black',
    size: 'h1',
    className: 'font-on',
  },
};
export const Heading2: Story = {
  args: {
    children: 'عنوان',
    type: 'h2',
    color: 'black',
    size: 'h2',
    className: 'font-on',
  },
};
export const Heading3: Story = {
  args: {
    children: 'عنوان',
    type: 'h3',
    color: 'black',
    size: 'h3',
    className: 'font-on',
  },
};
export const Heading4: Story = {
  args: {
    children: 'عنوان',
    type: 'h4',
    color: 'black',
    size: 'h4',
    className: 'font-on',
  },
};

export const Heading5: Story = {
  args: {
    children: 'عنوان',
    type: 'h5',
    color: 'black',
    size: 'h5',
    className: 'font-on',
  },
};
export const Heading6: Story = {
  args: {
    children: 'عنوان',
    type: 'h6',
    color: 'black',
    size: 'h6',
    className: 'font-on',
  },
};
