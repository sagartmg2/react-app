import React, { useContext } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, delayIncrement } from './app/reducers/counter'
// import { login, logout } from './app/reducers/auth'
import { CounterContext } from "./App"

export default function Counter() {

    const count = useSelector((state) => { return state.counter.value })
    const dispatch = useDispatch()

    console.log("-- render-- counter");

    const counter_context = useContext(CounterContext);

    return (
        <>
            <div className='col-6'>
                <button onClick={() => { dispatch(increment()) }}>add</button>
                redux count: {count}
                <button onClick={() => { dispatch(decrement()) }}>subtract</button>
                <button onClick={() => { dispatch(delayIncrement()) }}> delay</button>
            </div>
            <div className='col-6'>
                coutner_context:{counter_context.count}
                <button onClick={() => { counter_context.setCount(counter_context.count + 1) }}>add</button>

            </div>
        </>
    )
}
