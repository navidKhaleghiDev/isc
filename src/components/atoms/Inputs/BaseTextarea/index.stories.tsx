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
    tags : ["autodocs"],
    args : {
        name : "textArea",
        id :  "textArea",
        placeholder : "متن خود را وارد کنید",
        className : "border-2 border-cyan-600",
    },
    // Adding font family
    decorators: [
        (Story) => (
          <div dir="rtl" style={{fontFamily : "on"}}>
            <Story />
          </div>
        ),
    ]

};

// to use this component we need to add function because of 
// control of useForm hook
const renderBaseTextarea : StoryFn<typeof BaseTextarea> = (args) => {
    const {control} = useForm();

    return <BaseTextarea control={control}  {...args}/>
}

// Define different stories based on size & intent
export const textInputDefault : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        intent : "default"
    }
};

export const textInputError : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        intent : "error"
    }
};

export const textInputSm : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        size : "sm"
    }
};

export const textInputMe : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        size : "md"
    }
};

export const textInputLg : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        size : "lg"
    }
};

export const textInputXl : StoryBaseTextarea = {
    render : renderBaseTextarea,
    args : {
        id : "userMassage",
        name: "userMessage",
        placeholder : "متن خود را وارد  کنید",
        size : "xl"
    }
};


export default meta;



