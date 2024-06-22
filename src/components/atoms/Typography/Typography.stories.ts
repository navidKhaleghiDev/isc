import { Typography } from './Typography';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'components/Typography',
  component: Typography,
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
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph1: Story = {
  args: {
    children: 'paragraph',
    type: 'p',
    color: 'black',
    size: 'body1',
  },
};
export const Paragraph2: Story = {
    args: {
      children: 'paragraph',
      type: 'p',
      color: 'black',
      size: 'body2',
    },
  };
  export const Paragraph3: Story = {
    args: {
      children: 'paragraph',
      type: 'p',
      color: 'black',
      size: 'body3',
    },
  };

  export const Paragraph4: Story = {
    args: {
      children: 'paragraph',
      type: 'p',
      color: 'black',
      size: 'body4',
    },
  };
  export const Caption: Story = {
    args: {
      children: 'Caption',
      type: 'p',
      color: 'black',
      size: 'caption',
      weight:'normal',
      
    },
  };
  
  export const weightLight: Story = {
    args: {
      children: 'Caption',
      type: 'p',
      color: 'black',
      size: 'caption',
    },
  };
  export const weightBold: Story = {
    args: {
      children: 'Caption',
      type: 'p',
      color: 'black',
      size: 'caption',
      weight:'bold',
    },
  };
  export const WeightNormal: Story = {
    args: {
      children: 'Caption',
      type: 'p',
      color: 'black',
      size: 'caption',
      weight:'normal',
    },
  };
  export const WeightMedium: Story = {
    args: {
      children: 'Caption',
      type: 'p',
      color: 'black',
      size: 'caption',
      weight:'medium',
    },
  };
  export const Heading1: Story = {
    args: {
      children: 'Heading1',
      type: 'h1',
      color: 'black',
      size: 'h1',
    },
  };
  export const Heading2: Story = {
    args: {
      children: 'Heading2',
      type: 'h2',
      color: 'black',
      size: 'h2',
    },
  };
  export const Heading3: Story = {
    args: {
      children: 'Heading3',
      type: 'h3',
      color: 'black',
      size: 'h3',
    },
  };
  export const Heading4: Story = {
    args: {
      children: 'Heading4',
      type: 'h4',
      color: 'black',
      size: 'h4',
    },
  };
    
  export const Heading5: Story = {
    args: {
      children: 'Heading5',
      type: 'h5',
      color: 'black',
      size: 'h5',
    },
  };
  export const Heading6: Story = {
    args: {
      children: 'Heading6',
      type: 'h6',
      color: 'black',
      size: 'h6',
    },
  };
  
  
  
  
  