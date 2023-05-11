import React, {useState} from 'react'
export default function TextForm(props) {
    //Functions//
    function titleCase(str) {
        props.showAlert("Converted to Sentence case","success");
        str = str.toLowerCase().split('. ').map(function(word){
          return word.replace(word[0], word[0].toUpperCase());
      });
       return str.join('. ')
    }

    //UseStates
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }  
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }  
    const handleSeClick=()=>{
        let newText=titleCase(text);
        setText(newText);
    }  
    const handleOnChange=(event)=>{
        setText(event.target.value);
        //props.showAlert("Converted to Uppercase","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied","success");
    }
    const removeExSpaces=()=>{
        let newText=text.split(/[  ]+/)
        setText(newText.join(' '))
        props.showAlert("Extra Space has been removed","success");
    }
    const clearText=()=>{
        setText('')
        props.showAlert("Textarea has been cleared","success");
    }
    const [text,setText]=useState('');
    
    return (
    <>
        <div className="container p-3">
            <div className='container textForm p-2 rounded-3 w-100'>
                <h2 className='text-white mb-4'>{props.heading}</h2>
                <div className="mb-3">
                <textarea className={`form-control bg-${props.mode} text-${props.textColor}`} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="text-button">
                    <button disabled={text.length===0} className="btn btn primary bg-success m-1 text-white" onClick={handleUpClick}>UpperCase</button>
                    <button disabled={text.length===0} className="btn btn primary bg-primary m-1 text-white" onClick={handleLoClick}>LowerCase</button>
                    <button disabled={text.length===0} className="btn btn primary bg-info m-1 text-black" onClick={handleSeClick}>SentenceCase</button>
                    <button disabled={text.length===0} className="btn btn primary bg-danger m-1 text-white" onClick={handleCopy}>Copy</button>
                    <button disabled={text.length===0} className="btn btn primary bg-warning m-1 text-black" onClick={removeExSpaces}>RemoveSpaces</button>
                    <button disabled={text.length===0} className="btn btn primary bg-body m-1 text-black" onClick={clearText}>clear</button>

                </div>
            </div>
            <div className="container my-3 p-2 ps-4 textForm rounded-3 d-inline-block">
                <h2 className={`my-3 text-white`}>Text Summary</h2>
                <p className={`p-1 col-4 rounded border border-2 border-success bg-${props.mode} text-${props.textColor}`}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p className={`p-1 col-4 rounded border border-2 border-success bg-${props.mode} text-${props.textColor}`}>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} Minutes read</p>
                <h3 className='text-white'>Preview</h3>
                <p className={`preview p-1 bg-${props.mode} text-${props.textColor} rounded border-danger border border-2`}>{text.length>0?text:'Enter text to preview it here...'}</p>
            </div>
        </div>
    </> 
  )
}
