import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Todo(props) {

    const [count, setCount] = useState(0)

    const [todos, setTodo] = useState([])

    useEffect(() => {
        console.log("mounted");

        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {

                // console.log({ res });
                setTodo(res.data)

            })
            .catch(err => {
                console.log(err);
            })


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
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => {
                            return<tr key={todo.id}>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.title}</td>
                                {/* <td>
                                    <span className="badge rounded-pill text-bg-primary">Primary</span>
                                </td> */}
                                <td>
                                    <span className={`badge rounded-pill text-bg-${todo.completed ? "primary" : "danger"}`}>
                                        {todo.completed ? "Yes" : "NO"}
                                    </span>
                                </td>
                                <td>
                                    <Link to={`/todos/${todo.id}`}>
                                    <button className='btn btn-sm bg-secondary'>show</button>
                                    </Link>
                                </td>
                            </tr>

                        })
                    }

                </tbody>
            </table>


        </Fragment>
    )
}
