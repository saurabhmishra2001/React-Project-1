import React from 'react'
import  { useState } from 'react';



export default function UpperCase(props) {
    const handleUpClick=()=>{
        console.log("Lower Case was Clicked" +text)
        let newText=text.toUpperCase()
        setText(newText)
    }


    const handleClearClick=()=>{
        console.log("Clear was Clicked")
        setText("")
    }

    const handleCopyClick=()=>{
        console.log("Copy was Clicked")
        navigator.clipboard.writeText(text)
    }


    const handleLowClick=()=>{
        console.log("Lower Case was Clicked" +text)
        let newText=text.toLowerCase()
        setText(newText)        
    }

    const handleOnChange=(event)=>{
        console.log("onChange was Clicked")
        setText(event.target.value)
    }

    const [text, setText] = useState(props.placeholder);
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-outline-primary my-2 my-sm-0 mx-3" onClick={handleUpClick} type="submit">Convert to Upper Case</button>
        <button className="btn btn-outline-primary my-2 my-sm-0 mx 3" onClick={handleLowClick} type="submit">Convert to Lower Case</button>
        <button className="btn btn-outline-primary my-2 my-sm-0 mx-3" onClick={handleClearClick} type="submit">Clear Text</button>
        <button className="btn btn-outline-primary my-2 my-sm-0 mx-3" onClick={handleCopyClick} type="submit">Copy Text</button>
        
        

  </div>
  <div className='container my-3'>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length}  Words and {text.length} Characters </p>
    <p>{0.008 * text.split(" ").length} Minutes to  Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    <p></p>

  </div>
  </>
  )
}
