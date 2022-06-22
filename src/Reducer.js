import React, { useReducer, useState } from 'react'



const ACTIONS = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
}

export default function Reducer() {
    // const [state, setstate] = useState(0);

    function reducer(state, action) {
        switch (action.type) {
            case ACTIONS.INCREMENT:
                state = state + action.payload
                break;
            case "DECREMENT":
                state = state - 1
                break;
            default:
                break;
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, 1)


    function increment() {
        // dispath the action
        dispatch({ type: "INCREMENT", payload: 100 })
    }

    function decrement() {
        dispatch({ type: "DECREMENT" })
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {state}
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT, payload: 100 })}>+</button>
        </div>
    )
}
