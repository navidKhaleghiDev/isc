import { useForm } from "react-hook-form";
import { PasswordInput } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryPasswordInput = StoryObj<typeof PasswordInput>


// Main instruction for story
const meta : Meta< typeof PasswordInput> = {
    title : "atoms/inputs/PasswordInput",
    component : PasswordInput,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseInput : StoryFn<typeof PasswordInput> = (args) =>
    {
        const {control} = useForm()
        return <PasswordInput  control={control} {...args}/>
    }

export const passWordInput : StoryPasswordInput = {
    render : renderBaseInput,
    args : {
        name : "userPassword",
        placeholder : "گذرواژه",
         label : "گذرواژه",

    }
};

export default meta;



