import { SearchInput } from ".";

//Custom Types for storyBook
import { type Meta, type StoryObj } from "@storybook/react";

type StorySearchInput = StoryObj<typeof SearchInput>


// Main instruction for story
const meta : Meta< typeof SearchInput> = {
    title : "atoms/inputs/SearchInput",
    component : SearchInput,
    parameters : {
        layout : "centered"
    },
    tags : ["autodocs"],
    args : {
        label: "جست و جو ",
        value : ""
    },
    argTypes : {
        onChange : {action : "changed"}
    }

};

// Define story 
export const searchInput : StorySearchInput = {
    args : {
        value : "",
    }
};

export default meta;