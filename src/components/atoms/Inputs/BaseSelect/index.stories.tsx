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
    tags : ["autodocs"],
    args : {
        name : "select",
        id : "select" , 
        placeholder : "انتخاب" , 
        intent : "default",
    },
    //Adding font family
    decorators: [
        (Story) => (
          <div style={{fontFamily : "on"}}>
            <Story />
          </div>
        ),
    ]

};

// to use this component we need to add function because of 
// control of useForm hook
const renderBaseSelect : StoryFn<typeof BaseSelect> = (args) =>
    {
        const {control} = useForm()
        return <BaseSelect  control={control} {...args}/>
    }

// stories that are base on size & intent
export const optionInputDefault : StoryBaseSelect = {
    render : renderBaseSelect,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید"

    }
};

export const optionInputError : StoryBaseSelect = {
    render : renderBaseSelect,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید",
        intent : "error"

    }
};

export const optionInputSm : StoryBaseSelect = {
    render : renderBaseSelect,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید",
        size :"sm"

    }
};

export const optionInputMd : StoryBaseSelect = {
    render : renderBaseSelect,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید",
        size : "md"

    }
};

export const optionInputLg : StoryBaseSelect = {
    render : renderBaseSelect,
    args : {
        id : "sort-as",
        name : "sortAs",
        placeholder : "بنویسید",
        size : "lg"

    }
};

export default meta;



