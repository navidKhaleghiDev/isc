import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RulesCard } from '.';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'molecules/RulesCard',
  component: RulesCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        toc: true,
        component: `
            
            `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story): ReactElement => (
      <div dir='rtl' className='font-on'>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof RulesCard>;;

export default meta;

type Story = StoryObj<typeof meta>;

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
