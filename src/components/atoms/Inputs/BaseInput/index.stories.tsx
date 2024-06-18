import { BaseInput } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryBaseInput = StoryObj<typeof BaseInput>


// Main instruction for story
const meta : Meta< typeof BaseInput> = {
    title : "atoms/inputs/BaseInput",
    component : BaseInput,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseInput : StoryFn<typeof BaseInput> = (args) => <BaseInput  {...args}/>

export const textInput : StoryBaseInput = {
    render : renderBaseInput,
    args : {
        id :"username",
        placeholder : "نام کاربری",
        type : "text",
        label : "نام کاربری",

    }
};

export const emailInput : StoryBaseInput= {
    render : renderBaseInput,
    args : {
        placeholder : "آدرس ایمیل"
    }
};



export const passwordInput : StoryBaseInput = {
    render : renderBaseInput,
    args : {
       placeholder : "گذر واژه" 
    }
}



export default meta;



