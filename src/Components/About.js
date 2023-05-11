import React from 'react'

export default function About(props) {
    let myStyle={
        color: props.mode==='dark'?'white':'rgb(6 4 36)',
        backgroundColor:props.mode==='dark'?'rgb(6 4 36)':'white',
        border:'2px solid',
        borderColor:props.mode==='dark'?'white':'rgb(6 4 36)'
    }
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='m-3'>About Us</h1>
            <div className="accordion accordion-flush my-0" id="accordionFlushExample">
                <div className="accordion-item m-2">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is Textutils ?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want.</div>
                    </div>
                </div>
                <div className="accordion-item m-2">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        What is Textutils used for ?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle} >Textutils gives you a way to analyze your text quickly and efficiently, 
                       Be it word count,character count or time to read Textutils is a free character counter tool that provides instant character
                        count & word count statics for a given text. Textutils reports the 
                     number of words and characters.Thus it is suitable for writing text with word/character limit.</div>
                    </div>
                </div> 
                <div className="accordion-item m-2">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Why Textutils ?
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" style={myStyle}>This word counter software work in any web Browser such as chrome, firefox, internet Explorer, safari,opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays etc..</div>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}
