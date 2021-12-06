import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Wrapper from "./layout/Wrapper";
import Counter from "./components/Counter";

const App = () => {
    const [hide, setHide] = useState(false);

    const [counters, setCounters] = useState([
        {
            id: 1,
            title: "Hey",
            count: 0,
            description:
                "hey world, this is a sample text to show how this app is gonna look like so don't take this to the grave okay",
        },
    ]);

    const hideIt = () => {
        setHide((prevState) => !prevState);
    };

    const addCounter = (item) => {
        console.log(item);
        const { id, title, count, description } = item;
        console.log(counters);
        setCounters([
            ...counters,
            {
                id,
                title,
                count: count,
                description,
            },
        ]);
    };

    const increment = (id) => {
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id === id) {
                setCounters((prevState) => {
                    return [
                        ...prevState.slice(0, i),
                        {
                            ...prevState[i],
                            count: (prevState[i].count += 1),
                        },
                        ...prevState.slice(i + 1),
                    ];
                });
                return;
            }
        }
    };

    const decrement = (id) => {
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id === id) {
                setCounters((prevState) => {
                    return [
                        ...prevState.slice(0, i),
                        {
                            ...prevState[i],
                            count: (prevState[i].count -= 1),
                        },
                        ...prevState.slice(i + 1),
                    ];
                });
                return;
            }
        }
    };

    const counterMap = counters.map((counter) => (
        <Counter
            counter={counter}
            key={counter.id}
            inc={increment}
            dec={decrement}
        />
    ));

    return (
        <div className="App">
          <div className="heading">Counters</div>
            <Wrapper>

                {hide && <Input adder={addCounter} hideIt={hideIt} />}
                {counterMap}
                <div className="addNew" onClick={hideIt}>
                  <div>Add New Counter...</div>
                </div>
            </Wrapper>
        </div>
    );
};

export default App;
