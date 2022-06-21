import { useState, useEffect } from 'react';
import Button from './Button';

export default function Home(props) {

    let intitial_value = 0
    const [count, setCount] = useState(intitial_value)
    const [title, setTitle] = useState("random")

    

    // const [state, setState] = useState({
    //     count: 0,
    //     title: "random"
    // })

    function increment() {

        // setCount(count + 1) 
        // setCount(count + 1)
        // setCount(count + 1)
        // console.log({count});
        // setCount(count + 1)

        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <>
            <h1>Home</h1>
            {count}
            <br />
            <button onClick={increment}>add</button>
            <button onClick={decrement}>subtract</button>
            <Button title = "button" is_logged_in = {props.is_logged_in} />
        </>
    )
}