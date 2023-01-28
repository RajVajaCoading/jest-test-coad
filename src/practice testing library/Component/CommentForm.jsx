import React from 'react'
import {useState} from 'react'

const CommentForm = ({setComment}) => {
    const [text,setText] = useState("")
    const [checked,setChecked] = useState(false)

    const addData = () =>{
        setComment((prev)=>[...prev,{id:Date.now(),text:text}])
        setText("")
    }
  return (
   
         <div>
          <h2>comment form</h2>
          <input 
            placeholder="enter comment here"
            value={text} 
            onChange={e => setText(e.target.value)}
          />
          <input 
            type="checkbox"
            id="checkbox"
            defaultChecked={checked}
            onChange={()=> setChecked(!checked)}
          />  
          <label htmlFor="checkbox">    
            I agree to terms and conditions
          </label>
         <button 
          disabled={!checked || !text} 
        //   onClick={()=>console.log("clicked")}
        onClick={addData}
         >
           comment
         </button>
    
    </div>
  )
}

export default CommentForm