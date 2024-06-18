import { useForm } from "react-hook-form";
import { BaseSelect } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryBaseSelect = StoryObj<typeof BaseSelect>


// Main instruction for story
const meta : Meta< typeof BaseSelect> = {
    title : "atoms/inputs/BaseSelect",
    component : BaseSelect,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseInput : StoryFn<typeof BaseSelect> = (args) =>
    {
        const {control} = useForm()
        return <BaseSelect  control={control} {...args}/>
    }

export const textInput : StoryBaseSelect = {
    render : renderBaseInput,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید"

    }
};

export default meta;



