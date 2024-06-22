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

// Define story 
export const searchInput : StorySearchInput = {
    args : {
        value : "",
    }
};

export default meta;