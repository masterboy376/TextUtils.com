import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = ()=>{
        let newText = text.toLocaleUpperCase();
        setText(newText); 
        props.showAlert("text is converted to upper case!",'success');  
    }
    const handleLowClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);           
        props.showAlert("text is converted to lower case!",'success');  
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText); 
        props.showAlert("text has been cleared!",'success');  
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' ')); 
        props.showAlert("extra space has been removed!",'success');  
    }
    const handleCopy = ()=>{
        // let myBox = document.getElementById('myBox');
        // myBox.select();//or
        // window.getSelection().selectAllChildren(myBox);
        //myBox.setSelectionRange(0,9999);//not really needed here
        navigator.clipboard.writeText(text);
        props.showAlert("text has been copied!",'success');  
    }
    const handleUpFirstClick = ()=>{
        let newArr = [];
        let arr = text.split(' ');

        arr.forEach((element, index)=>{
            element = element.toLowerCase();
            let newElement = element.charAt(0).toUpperCase()+element.slice(1);
            newArr.push(newElement);
        })

        let newText = newArr.toString().replaceAll(',',' ');
        setText(newText); 
         props.showAlert("first letters are now capitalized!",'success');  
    }
    const handleOnChange = (e)=>{
        let newText = e.target.value;
        setText(newText);
        
    }

    return (
        <div className={`bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
            <div className="container py-2 text-center">
                <h1 className="display-5">Welcome to TextUtils</h1>
                <h1 className="display-6">{props.heading}</h1>
            </div>
            <div className="container my-4">
                <label htmlFor="myBox" className="form-label">Enter your text here</label>
                <textarea onChange={handleOnChange} placeholder="Enter your text here..." className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} id="myBox" rows="10"></textarea>
            <div className="my-2 d-flex justify-content-evenly row">
                <button disabled={text.length === 0} onClick={handleUpClick} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Convert to upper case</button>
                <button disabled={text.length === 0} onClick={handleLowClick} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Convert to lower case</button>
                <button disabled={text.length === 0} onClick={handleClearClick} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Clear Text</button>
                <button disabled={text.length === 0} onClick={handleUpFirstClick} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Captalize first letter</button>
                <button disabled={text.length === 0} onClick={handleCopy} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Copy</button>
                <button disabled={text.length === 0} onClick={handleExtraSpaces} className={`btn col-5 mt-2 btn-outline-${props.mode === 'light'?'dark':'light'} block-btn`}>Trim extra spaces</button>
            </div>
            </div>

            <div className="container py-4">
                <h1 className="display-5 text-center">Your text summery</h1>
                <p className="text-center">{text.split(/\s+/).filter((element)=>{ return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p className="text-center">This text will require on an average {0.008*(text.split(" ").filter((element)=>{ return element.length !== 0 }).length)} minutes to read.</p>
                <h1 className="display-5 mt-4 text-center">Text Preview</h1>
                <p className="text-center">{text.length>0?text:'Enter your text to preview...'}</p>
            </div>
        </div>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}
TextForm.defaultProps = {
    heading: 'Welcome!',
}
