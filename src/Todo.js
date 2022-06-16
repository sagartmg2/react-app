import React, { Fragment, useEffect, useState } from 'react'


export default function Todo() {

    const [count, setCount] = useState(0)



    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [])


    useEffect(() => {
        console.log("only check for count state");
    }, [count])


    useEffect(() => {
        console.log("effect -1 ");
    })

    function increment(value) {
        // console.log(value);
        setCount((prev) => prev + 1)
    }

    console.log("render")

    return (
        <Fragment>
            <h1>TODO LIST</h1>
            <div>{count}</div>
            <button onClick={() => { increment(10) }}> increment</button>
        </Fragment>
    )
}
