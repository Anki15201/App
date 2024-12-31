import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText);
    }


    const handleOnChange = (event) =>{
        // console.log("uppercase was clicked");
        setText(event.target.value)
    }
  
    const [text, setText] = useState('Enter text here'); // this is useState hook
    // text = "new text"; // Wrong way
    // setText("new text"); // Correct way
    // the button is blue beacuse of btn-primary. this primary primary is for blue beacuse we use bootstrap

  return (
    <>
    <div className="conatainer">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text </button>


    </div>

    <div className="container my-4">
        <h1>Your text summary</h1> 
        <p>{text.split(" ").filter((element) => {return element.length!== 0}).length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
