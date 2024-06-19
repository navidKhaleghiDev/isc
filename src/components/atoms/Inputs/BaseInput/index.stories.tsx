import { BaseInput } from "."; 

// Custom Types for Storybook
import { type Meta, type StoryObj } from "@storybook/react";


// Type definition for a story based on BaseInput
type StoryBaseInput = StoryObj<typeof BaseInput>;


// Main instruction for story
const meta: Meta<typeof BaseInput> = {
  title: "atoms/inputs/BaseInput",
  component: BaseInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    name : "base input",
    intent : "default",
    size : "md",
    type : "text",
    min : 5,
    max : 15
  },
  argTypes: {
    onClickIcon : {action : "changed"},
    pureOnChange : {action : "pure Change"}
  },
  //Adding font family
  decorators: [
    (Story) => (
      <div style={{fontFamily : "on"}}>
        <Story />
      </div>
    ),
  ],
  
  render: (args) => <BaseInput {...args} />,
};

export default meta;

// Defining  stories based on size & intent 
export const textInput: StoryBaseInput = {
  args: {
    id: "username",
    placeholder: "نام کاربری",
    type: "text",
    label: "نام کاربری",
  
  },
};

export const emailInput: StoryBaseInput = {
  args: {
    placeholder: "آدرس ایمیل",
    type: "email", 
    label: "ایمیل",
  },
};

export const errorInput: StoryBaseInput = {
  args: {
    id: "username",
    placeholder: "نام کاربری",
    type: "text",
    intent : "error"
  },
};

export const textInputSm: StoryBaseInput = {
  args: {
    id: "username",
    placeholder: "نام کاربری",
    type: "text",
    label: "نام کاربری",
    size : "sm"
  
  },
};

export const textInputMd: StoryBaseInput = {
  args: {
    id: "username",
    placeholder: "نام کاربری",
    type: "text",
    label: "نام کاربری",
    size : "md"
  
  },
};

export const textInputLg: StoryBaseInput = {
  args: {
    id: "username",
    placeholder: "نام کاربری",
    type: "text",
    label: "نام کاربری",
    size : "lg"
  
  },
};
