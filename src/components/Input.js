import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div className={classes.input}>
            <div className={classes.input__field}>
                <label>Title</label>
                <input />
            </div>
            <div className={classes.input__field}>
                <label>Initial Count</label>
                <input />
            </div>
            <div className={classes.input__field}>
                <label>Description</label>
                <input />
            </div>
            <button>Submit</button>
        </div>
    );
};

export default Input;
