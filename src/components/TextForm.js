import React, { useState } from "react";

export default function TextFrom(props) {
  const HandleClickUp = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.ShowAlert("Converted to uppercase","success")
  };
  const HandleClickLo = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.ShowAlert("Converted to lowercase","success")
  };
  const HandleOnChange = (event) => {
    setText(event.target.value);
  };
  const HandleClear = () =>{
    setText('');
    props.ShowAlert("Text Cleared","success")
  }

  const [Text, setText] = useState("Enter Text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={Text}
            onChange={HandleOnChange}
            rows="8"
            style={{backgroundColor: `${props.Mode==='dark'?'#343a40':'#fff'}`,color:`${props.Mode==='dark'?'#fff':'#343a40'}`}}
          ></textarea>
        </div>
        <button className={`btn btn-${props.color==='white'?'primary':'secondary'} mx-1`} onClick={HandleClickUp}>
          Convert ot Uppercase
        </button>
        <button className={`btn btn-${props.color==='white'?'primary':'secondary'} mx-1`} onClick={HandleClickLo}>
          Convert ot Lowercase
        </button>
        <button className={`btn btn-${props.color==='white'?'primary':'secondary'} mx-1`} onClick={HandleClear}>
          Clear Text
        </button>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").length} Minute Time to read</p>

        <h2>Text Preview</h2>
        <p style={{border:`1px solid ${props.Mode==='light'?'#343a40':'#fff'}`, borderRadius:'7px'}} className="p-2">{Text}</p>
      </div>
    </>
  );
}
