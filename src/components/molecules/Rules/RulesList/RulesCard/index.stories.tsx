import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import { RulesCard } from '.';

const meta = {
  title: 'molecules/RulesCard',
  component: RulesCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
            نمایش تک کارت مربوط به قوانین
            Displays a single card related to rules.
            `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story): ReactElement => (
      <div
        dir="rtl"
        className="font-kalameh"
        style={{ width: '60vw', height: '20vh' }}
      >
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof RulesCard>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Displays a single card related to rules.
 */
export const Default: Story = {
  args: {
    rule: {
      id: '8ba98537-4c7b-4293-80d1-0d5a4efab00b',
      name: 'dnp3-function-code-dir-opt',
      description: 'this is a predefined rule',
      code: 'fgdh65fgd665hbf65nb1g6h',
      version: 1,
      is_public: true,
      is_verified: true,
      created_at: '02/04/1400',
      updated_at: '04/04/1403',
    },
  },
};
