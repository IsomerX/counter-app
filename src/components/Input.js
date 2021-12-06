import React, { useRef, useState } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    const [backdrop, setBackdrop] = useState(true);

    const title = useRef("");
    const initialCount = useRef(0);
    const description = useRef("");

    const submitHandler = () => {
        let n = parseInt(initialCount.current.value)
        if(isNaN(n))
            n = 0;
        props.adder({
            id: Math.floor(Math.random() * 1999999),
            title: title.current.value,
            count: n,
            description: description.current.value
        })
        props.hideIt();
    };

    return (
        <>
            {backdrop && <div className={classes.input__backdrop} onClick={props.hideIt}></div>}
            <div className={classes.input}>
                <div className={classes.input__field}>
                    <label>Title</label>
                    <input ref={title}/>
                </div>
                <div className={classes.input__field}>
                    <label>Initial Count</label>
                    <input ref={initialCount}/>
                </div>
                <div className={classes.input__field}>
                    <label>Description</label>
                    <input ref={description}/>
                </div>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </>
    );
};

export default Input;
