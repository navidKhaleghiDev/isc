import { useForm } from "react-hook-form";
import { DatePicker } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StoryDatePicker = StoryObj<typeof DatePicker>


// Main instruction for story
const meta : Meta< typeof DatePicker> = {
    title : "atoms/inputs/DatePicker",
    component : DatePicker,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderDatePicker : StoryFn<typeof DatePicker> = (args) => {

    const {control} = useForm()
    return  <DatePicker control={control}  {...args}/>

}

export const textInput : StoryDatePicker = {
    render : renderDatePicker,
    args : {
        id :"calenderPicker",
        name : "solarCalender",
        type : "date",
        showTimePicker : true

    }
};

export default meta;



