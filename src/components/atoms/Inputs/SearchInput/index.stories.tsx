import { SearchInput } from ".";

//Custom Types for storyBook
import { Meta, StoryFn, StoryObj } from "@storybook/react";

type StorySearchInput = StoryObj<typeof SearchInput>


// Main instruction for story
const meta : Meta< typeof SearchInput> = {
    title : "atoms/inputs/SearchInput",
    component : SearchInput,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"]

};

//rendering component of story
const renderBaseInput : StoryFn<typeof SearchInput> = (args) => <SearchInput {...args} />

export const textInput : StorySearchInput = {
    render : renderBaseInput,
    args : {
        value : "",
         onChange(value) {
             console.log(value)
         },

    }
};

export default meta;



