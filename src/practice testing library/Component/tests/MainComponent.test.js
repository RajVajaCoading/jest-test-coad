import { render,screen } from "@testing-library/react";
import MainComponent from "../MainComponent";
import userEvent from "@testing-library/user-event"

test("comment display after submiting",()=>{
    render(<MainComponent/>)
    const commentinput = screen.getByPlaceholderText("enter comment here",{exact:false})
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})

    userEvent.type(commentinput,"someting")
    userEvent.click(checkbox)
    userEvent.click(submitButton)

    const commentList = screen.getByText("someting",{exact:false})
    expect(commentList).toBeInTheDocument()
})

test("2 comment display after submiting",()=>{
    render(<MainComponent/>)
    const commentinput = screen.getByPlaceholderText("enter comment here",{exact:false})
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})

    userEvent.type(commentinput,"someting")
    userEvent.click(checkbox)
    userEvent.click(submitButton)

    // userEvent.clear(commentinput)

    userEvent.type(commentinput,"awesome")
    userEvent.click(submitButton)



    const commentList = screen.getAllByRole("listitem")
    expect(commentList.length).toBe(2)
})