import React, { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { toggle } from './app/reducers/auth'
import { UserContext } from './UserContext'

export default function Status() {

    const is_logged_in = useSelector((state) => { return state.auth.is_logged_in })

    console.log("render --satus --");
    const user = useContext(UserContext);
    const dispatch = useDispatch()


    return (
        <>
            <div className='col-6'>
                <p>
                    redux login status:
                </p>
                <h1>{is_logged_in ? "true" : "false"}</h1>
                <button onClick={() => { dispatch(toggle()) }}>toggle redux </button>


            </div>
            <div className='col-6'>
                <p>
                    app_counter:
                </p>
                <h1>{user.is_logged_in ? "true" : "false"}</h1>
                <button onClick={() => {
                    user.setLogin(!user.is_logged_in)
                }}>toggle context login</button>
            </div>
        </>
    )
}
