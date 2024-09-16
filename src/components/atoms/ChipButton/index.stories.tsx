import { type Meta, type StoryFn, type StoryObj } from '@storybook/react';
import X from '@iconify-icons/ph/x';
import Arrow from '@iconify-icons/ph/arrow-clockwise-bold';
import Heart from '@iconify-icons/ph/heart';
import { ChipButton } from './ChipButton';

const iconMap = {
  Close: X,
  Arrow,
  Heart,
};

type StoryChipButton = StoryObj<typeof ChipButton>;

const meta: Meta<typeof ChipButton> = {
  title: 'atoms/ChipButton',
  component: ChipButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ChipButton',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Chip Button',
    color: 'default',
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'neutralLight',
        'neutral',
        'tealLight',
        'teal',
        'yellowLight',
        'yellow',
        'redLight',
        'red',
        'blueLight',
        'blue',
        'purpleLight',
        'purple',
      ],
    },
    dir: {
      control: 'select',
      options: ['rtl', 'ltr'],
    },
    onClick: {
      control: { type: 'boolean' },
      defaultValue: false,
    },

    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
  render: (args) => (
    <ChipButton
      label={args.label}
      color={args.color}
      icon={args.icon}
      onClick={args.onClick}
      disabled={args.disabled}
      dir={args.dir}
    />
  ),
  decorators: [
    (Story) => (
      <div dir="ltr" style={{ fontFamily: 'Arial, sans-serif' }}>
        <Story />
      </div>
    ),
  ],
};

function RenderChipButton(args: Parameters<StoryFn<typeof ChipButton>>[0]) {
  const { label, color, icon, onClick, disabled, dir } = args;

  return (
    <ChipButton
      label={label}
      color={color}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      dir={dir}
    />
  );
}

export const DefaultChipButton: StoryChipButton = {
  render: RenderChipButton,
  args: {
    label: 'Chip Button',
    color: 'default',
    disabled: false,
  },
};

export default meta;
