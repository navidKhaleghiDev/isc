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
    args : {
        name : "Data picker",
        id : "DataPickerSolar",
        placeholder : "تاریخ شمسی",
        intent : "default",
        showTimePicker : false,
        format : 'YYYY/MM/DD',
    },
    //Adding font family 
    tags : ["autodocs"],
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
const renderDatePicker : StoryFn<typeof DatePicker> = (args) => {

    const {control} = useForm()
    return  <DatePicker control={control}  {...args}/>

}

// Defining stories base on intent 
export const datePickerWithTimePicker : StoryDatePicker = {
    render : renderDatePicker,
    args : {
        id :"calenderPicker",
        name : "solarCalender",
        type : "date",
        showTimePicker : true

    }
};

export const datePickerWithOutTImePicker : StoryDatePicker = {
    render : renderDatePicker,
    args : {
        id :"calenderPicker",
        name : "solarCalender",
        type : "date",
        showTimePicker : false

    }
};

export const datePickerError : StoryDatePicker = {
    render : renderDatePicker,
    args : {
        id :"calenderPicker",
        name : "solarCalender",
        type : "date",
        intent : "error",
        showTimePicker : true

    }
};







export default meta;



