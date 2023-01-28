import React, { useState } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

const MainComponent = () => {
    // const comment = [{id:1,text:"comment 1"},
    // {id:1,text:'comment 2'}]

    const [comment,setComment] = useState([]);
  return (
    <div>
        <CommentForm setComment={setComment}/>
        <CommentList allcomments={comment}/>
    </div>
  )
}

export default MainComponent