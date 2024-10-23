import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button is clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Your text is converted into uppercase", "success")
    }
    const handleLoClick = () => {
        // console.log("Button is clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Your text is converted into lowercase", "success")
    }
    const clearOnClick = ()=> {
        let newText = ''
        setText(newText)
        props.showAlert("Text is cleared", "success")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const ItalicOnClick = ()=>{
        setIsItalic(!isItalic)
        if(!isItalic){
            props.showAlert("Your text is converted into Italic", "success")
        }
        else{
            props.showAlert("Your text is converted into Normal", "success")
        }
    }
    const textPreview = ()=>{
        if( text.trim() === ""){
            alert("You need to Enter your text to preview")
            return
        }
        let Preview = document.querySelector(".previewText")
        Preview.innerText = text
        setCopyButtonVisible(true);
    
    }
    const handleCopyClick = ()=>{
        if( text.trim() === ""){
            alert("Empty text cannot be copied")
            return
        }
        navigator.clipboard.writeText(text)
        .then(()=>{
            alert("Text is Copied")
        })
        .catch((err) => {
            console.error("Unable to Copy the Text",err)}
        )
    }
    const [text, setText] = useState("Enter Text Here")
    const [ isCopyButtonVisible, setCopyButtonVisible] = useState(false);
    const [ isItalic, setIsItalic] = useState(false)
  return (
    <>
    <div className={`container ${props.mode === "dark" ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div>
          <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"  value = {text} onChange={handleOnChange}
            style={{fontStyle: isItalic ? "italic" : "normal",
                backgroundColor: props.mode === "dark" ? "#162b57" : "#fff",
                color: props.mode === "dark" ? "#fff" : "#000",
            }}
          ></textarea>
        </div>
        <button className="primary-btn mx-2 my-1" disabled = {text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="second-btn mx-2 my-1" disabled = {text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="clear-btn mx-2 my-1" disabled = {text.length===0} onClick={clearOnClick}>Clear</button>
        <button className="italic-btn mx-2 my-1" disabled = {text.length===0} onClick={ItalicOnClick}>{isItalic ? "Remove Italic" : "Convert Into Italic"}</button>
      </div>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter(word => word!=="").length} words and {text.replace(/\s/g,"").length} Characters</p>
        <p>{0.008*text.split(" ").filter(word => word!=="").length} Minutes taken to read</p>
        <button className="preview" onClick={textPreview}>Preview Your Text</button>
        <button className="copyText mx-3" hidden ={!isCopyButtonVisible} onClick={handleCopyClick} >Copy</button>
        <p className="previewText my-2" ></p>
        {/* <h2>Preview</h2>
        <p>{text}</p> */}
      </div>
      </>
  );
}
