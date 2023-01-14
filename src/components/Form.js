import React,{useState} from "react";
const Form = () => {
    const[text,setText] = useState('');
    return (
            <form>
                <input type = "text" value = {text} onChange = {e => setText(e.target.value)} />
                <button>Submit</button>
            </form>

    )
}

export default Form;
