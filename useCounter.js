import { useState } from "react"

export const useCounter = ( initialState =  10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment = (f) => {
        setCounter( counter + 1 );
    };

    const decrement = (f) => {
        setCounter( counter - 1 );
    };

    const reset = () => {
        setCounter( initialState );
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };
};
