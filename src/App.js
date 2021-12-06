import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Wrapper from "./layout/Wrapper";

const App = () => {
    const [counters, setCounters] = useState([]);

    const addCounter = (item) => {
        const { title, id, initialCount, description } = item;
        console.log(counters)
        setCounters([
            ...counters,
            {
                id,
                title,
                count: initialCount,
                description,
            },
        ]);
    };

    return (
        <div className="App">
            <Wrapper>
                <Input adder={addCounter}/>
            </Wrapper>
        </div>
    );
};

export default App;
