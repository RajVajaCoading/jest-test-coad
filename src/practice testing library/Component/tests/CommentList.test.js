import { render,screen } from "@testing-library/react";
import CommentList from "../CommentList";

test("comment are not available",()=>{
    render(<CommentList allcomments={[]}/>)
    const h2Ele = screen.getByText("no comments",{exact:false})
    expect(h2Ele).toBeInTheDocument()
})

// test("list all comment",()=>{
//     render(<CommentList allcomments={[{id:1,text:"comment 1"},{id:1,text:'comment 2'}]}/>)
//     const h2Ele = screen.queryByText("no comments",{exact:false})
//     expect(h2Ele).not.toBeInTheDocument()

//     const commentList = screen.getAllByRole("listitem")
//     expect(commentList.length).toBe(2)

//     // or 
//     // expect(screen.getByText("comment 1")).toBeInTheDocument()
//     // expect(screen.getByText("comment 2")).toBeInTheDocument()


    
// })

// or 

test("list all comment",()=>{
    const comment = [{id:1,text:"comment 1"},{id:1,text:'comment 2'}]
    render(<CommentList allcomments={comment}/>)
    const h2Ele = screen.queryByText("no comments",{exact:false})
    expect(h2Ele).not.toBeInTheDocument()

    const commentList = screen.getAllByRole("listitem")
    expect(commentList.length).toBe(comment.length)

    // or 
    // expect(screen.getByText("comment 1")).toBeInTheDocument()
    // expect(screen.getByText("comment 2")).toBeInTheDocument()  
})