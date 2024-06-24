import { Meta, StoryObj } from "@storybook/react/*";
import { ProductList } from ".";
import { ReactElement } from "react";

const meta = {
    title: 'molecules/ProductList',
    component: ProductList,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
                
                `,
            },
        },
    },
    tags: ['autodocs'],
    args: {

    },
    argTypes: {},
    decorators: [
        (Story): ReactElement => (
            <div dir="rtl" className="font-on">
                <Story />
            </div>
        )
    ],
} satisfies Meta<typeof meta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

}