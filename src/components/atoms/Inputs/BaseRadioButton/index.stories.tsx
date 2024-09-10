import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BaseRadioButton } from '.';

type StoryBaseRadioButton = StoryObj<typeof BaseRadioButton>;

const meta: Meta<typeof BaseRadioButton> = {
  title: 'atoms/Inputs/BaseRadioButton',
  component: BaseRadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'BaseTextArea',
      },
    },
  },
  args: {
    name: 'radiobutton',
    id: 'radio',
    intent: 'default',
    size: 'md',
    label: 'label',
    pureOnChange: fn(),
    className: 'font-kalameh',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md'],
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    dir: {
      control: {
        type: 'radio',
      },
      options: ['rtl', 'ltr'],
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => (
    <BaseRadioButton
      id={args.id}
      name={args.name}
      checked={args.checked}
      pureError={args.pureError}
      className={args.className}
      size={args.size}
      dir={args.dir}
      defaultValue={args.defaultValue}
      hiddenError={args.hiddenError}
      intent={args.intent}
      label={args.label}
      pureValue={args.pureValue}
    />
  ),
};

export const defaultRadioButton: StoryBaseRadioButton = {
  args: {
    intent: 'default',
    size: 'md',
    dir: 'rtl',
  },
};

export default meta;
