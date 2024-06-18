import { useForm } from "react-hook-form";
import { BaseTextarea } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryBaseTextarea = StoryObj<typeof BaseTextarea>


// Main instruction for story
const meta : Meta< typeof BaseTextarea> = {
    title : "atoms/inputs/BaseTextarea",
    component : BaseTextarea,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseTextarea : StoryFn<typeof BaseTextarea> = (args) => {
    const {control} = useForm();

    return <BaseTextarea control={control}  {...args}/>
}

export const textInput : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        className : "border-2 border-cyan-200"
    }
};

export default meta;



