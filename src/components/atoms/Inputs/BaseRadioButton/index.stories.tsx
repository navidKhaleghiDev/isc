import { Meta, StoryObj } from '@storybook/react';

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
    label: 'label',
    className: 'font-kalameh',
  },
  argTypes: {
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
    <>
      <BaseRadioButton
        id={args.id}
        name={args.name}
        checked={args.checked}
        error={args.error}
        className={args.className}
        dir={args.dir}
        defaultValue={args.defaultValue}
        hiddenError={args.hiddenError}
        label={args.label}
        value={args.value}
      />
      <br />
      <BaseRadioButton
        id={args.id + 1}
        name={args.name}
        checked={args.checked}
        error={args.error}
        className={args.className}
        dir={args.dir}
        defaultValue={args.defaultValue}
        hiddenError={args.hiddenError}
        label={args.label}
        value={args.value}
      />
    </>
  ),
};

export const defaultRadioButton: StoryBaseRadioButton = {
  args: {
    dir: 'rtl',
  },
};

export default meta;
