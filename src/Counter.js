import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './app/reducers/counter'
// import { login, logout } from './app/reducers/auth'

export default function Counter() {

    const count = useSelector((state) => { return state.counter.value })
    const dispatch = useDispatch()

    console.log("-- render-- counter");
    return (
        <>
            <div className='col-6'>
                <button onClick={() => { dispatch(increment()) }}>add</button>
                {count}
                <button onClick={() => { dispatch(decrement()) }}>subtract</button>
            </div>
        </>
    )
}
