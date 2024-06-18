import { BaseCheckBox } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryBaseCheckBox = StoryObj<typeof BaseCheckBox>


// Main instruction for story
const meta : Meta< typeof BaseCheckBox> = {
    title : "atoms/inputs/BaseCheckBox",
    component : BaseCheckBox,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseCheckBox : StoryFn<typeof BaseCheckBox> = (args) => <BaseCheckBox  {...args}/>

export const textInput : StoryBaseCheckBox = {
    render : renderBaseCheckBox,
    args : {
        id :"checkBox",
        name : "نام کاربری",

    }
};




export default meta;



