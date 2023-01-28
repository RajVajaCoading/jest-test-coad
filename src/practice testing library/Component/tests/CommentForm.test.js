import {fireEvent, render,screen} from "@testing-library/react"
import CommentForm from "../CommentForm"
import userEvent from "@testing-library/user-event";

/* test("initial condition",()=>{
    render(<CommentForm/>)
    const commentinput = screen.getByRole("textbox")
    expect(commentinput).toBeInTheDocument()
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})
    expect(submitButton).toBeDisabled()

} );

test("if user enter comment and click checkbox button enable",()=>{
    render(<CommentForm/>)
    const commentinput = screen.getByPlaceholderText("enter comment here",{exact:false})
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})
    fireEvent.change(commentinput,{target:{value:"someting"}})
    fireEvent.click(checkbox)
    expect(submitButton).toBeEnabled()
    fireEvent.click(checkbox)
    expect(submitButton).toBeDisabled()
}) */


// this is secound method we can use user-event instead of  fireEvent


test("initial condition",()=>{
    render(<CommentForm/>)
    const commentinput = screen.getByRole("textbox")
    expect(commentinput).toBeInTheDocument()
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})
    expect(submitButton).toBeDisabled()

} );

// use-event use in this function 
test("if user enter comment and click checkbox button enable",async ()=>{
    render(<CommentForm/>)
    const commentinput = screen.getByPlaceholderText("enter comment here",{exact:false})
    const checkbox = screen.getByLabelText("I agree to terms and conditions",{exact:false})
    const submitButton = screen.getByRole("button",{name:"comment",exact:false})
    // fireEvent.change(commentinput,{target:{value:"someting"}})
    userEvent.type(commentinput,"someting")
    userEvent.click(checkbox)
    expect(submitButton).toBeEnabled()

    userEvent.click(checkbox)
    expect(submitButton).toBeDisabled()
})






/* describe("group ma coad test karvo hoy tyare aa vaprvu",()=>{
    test("initial condition",()=>{
        render(<CommentForm/>)
        const commentinput = screen.getByRole("textbox")
        expect(commentinput).toBeInTheDocument()
        const checkbox = screen.getByLabelText("i agree to term and con dition",{exact:false})
        expect(checkbox).toBeInTheDocument()
        const submitButton = screen.getByRole("button",{name:"comment",exact:false})
        expect(submitButton).toBeDisabled()
    
    } );
    
    test("if user enter comment and click checkbox button enable",()=>{
        render(<CommentForm/>)
        const commentinput = screen.getByPlaceholderText("enter comment here",{exact:false})
        const checkbox = screen.getByLabelText("i agree to term and con dition",{exact:false})
        const submitButton = screen.getByRole("button",{name:"comment",exact:false})
        fireEvent.change(commentinput,{target:{value:"someting"}})
        fireEvent.click(checkbox)
        expect(submitButton).toBeEnabled()
        fireEvent.click(checkbox)
        expect(submitButton).toBeDisabled()
    })
}) */