import React from 'react'
import  { useState } from 'react';



export default function UpperCase(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was Clicked" +text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log("onChange was Clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState(props.placeholder);
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleUpClick} type="submit">Convert to Uppercase</button>

  </div>
  )
}
