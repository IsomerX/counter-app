import React from "react";
import "./Counter.css";

const Counter = (props) => {
    const incHandler = () => {
        props.inc(props.counter.id);
    };
    const decHandler = () => {
        props.dec(props.counter.id);
    };

    return (
        <div className="counter">
            <div className="counter__container">
                <div className="counter__title">{props.counter.title}</div>
                <div className="counter__count">{props.counter.count}</div>
                <div className="counter__description">
                    {props.counter.description}
                </div>
                <div className="buttons">
                    <button className="counter__inc" onClick={incHandler}>
                        <span>+</span>
                    </button>
                    <button className="counter__dec" onClick={decHandler}>
                        <span> - </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
