import React from 'react'

import { useSelector } from 'react-redux'

export default function Status() {

    const is_logged_in = useSelector((state) => { return state.auth.is_logged_in })

    console.log("render --satus --");
    return (
        <>
            <div className='col-6'>
                <p>
                    is_logged_in:
                </p>
                <h1>{is_logged_in ? "true" : "false"}</h1>

            </div>
        </>
    )
}
