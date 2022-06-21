import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function Show() {

  let { id } = useParams();
  const [user, setUser] = useState({});
  const [todo, setTodo] = useState({});

  useEffect(() => {
    console.log("mount");

    axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then(res => {
        setTodo(res.data);

      })
      .catch(err => {
        console.log({ err });

      })

    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    if (todo.userId) {
      axios.get("https://jsonplaceholder.typicode.com/users/" + todo.userId)
        .then(res => {
          setUser(res.data);
        })
        .catch(err1 => {
          console.log({ err1 });
        })
    }
  }, [todo]);

  if(!user.name){
    return <>Loading.....</>
  }

  return (
    <>
      <h1>{todo.title}</h1>
      <p>by - {user.name}</p>
      {JSON.stringify(user)}
    </>
  )
}
