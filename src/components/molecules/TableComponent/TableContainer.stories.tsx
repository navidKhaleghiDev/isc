import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';

import { TableContainer } from './TableContainer';
import { Column } from './types';
import { dataMockTable } from './dataMock';

const meta = {
  title: 'molecules/Table',
  component: TableContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
        `,
      },
    },
  },
  decorators: [
    (Story): ReactElement => (
      <BrowserRouter>
        <div style={{ direction: 'rtl', fontFamily: 'kalameh' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TableContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

const setUserId = () => {};

const toggleModalDelete = () => {};

const columnsTable: Column[] = [
  {
    type: 'fullName',
    accessor: ['first_name', 'last_name'],
    header: 'نام',
    className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
  },
  {
    type: 'default',
    accessor: 'email',
    header: 'ایمیل',
    className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
  },
  {
    type: 'default',
    accessor: 'userType',
    header: 'نوع کاربری',
    className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 w-1/2 min-w-[200px]',
  },
  {
    type: 'date',
    accessor: 'date_joined',
    header: 'تاریخ ثبت نام',
    className: 'xl:w-1/5 lg:w-1/6 sm:w-1/3 sm:min-w-fit w-1/2 min-w-[200px]',
  },
  {
    type: 'component',
    actionType: 'edit',
    accessor: 'edit',
    editRoute: '',
    className: 'lg:w-96 w-auto',
  },
  {
    type: 'component',
    actionType: 'delete',
    accessor: 'delete',
    onDelete: setUserId,
    openModal: toggleModalDelete,
    className: 'lg:w-96 w-auto pl-6',
  },
];

export const Default: Story = {
  args: {
    columns: columnsTable,
    data: dataMockTable,
  },
};
